import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  logo?: React.ReactNode;
}

export function NavBar({ items, className, logo }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const manualOverride = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver — auto-detect visible section
  useEffect(() => {
    const hashItems = items.filter((item) => item.url.startsWith("#"));
    const sections = hashItems
      .map((item) => document.getElementById(item.url.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualOverride.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = hashItems.find(
              (item) => item.url === `#${entry.target.id}`
            );
            if (match) setActiveTab(match.name);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback((item: NavItem) => {
    setActiveTab(item.name);
    manualOverride.current = true;
    setTimeout(() => { manualOverride.current = false; }, 1200);

    const element = document.querySelector(item.url);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2",
        "bottom-6 sm:top-0 sm:bottom-auto sm:pt-4",
        className
      )}
    >
      <div className="flex items-center gap-1 bg-background/5 border border-border/40 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-lg">
        {logo && (
          <a
            href="#"
            onClick={() => setActiveTab(items[0].name)}
            className="hidden sm:flex items-center pl-3 pr-1 shrink-0"
          >
            {logo}
          </a>
        )}

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              {...(item.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={(e) => {
                if (item.url.startsWith("http")) return;
                e.preventDefault();
                handleClick(item);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors whitespace-nowrap",
                item.url.startsWith("http")
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25"
                  : cn("text-foreground/80 hover:text-primary", isActive && "bg-muted text-primary")
              )}
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary opacity-80" />
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 rounded-full bg-primary/20 blur-md" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-16 h-6 rounded-full bg-primary/10 blur-xl" />
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
