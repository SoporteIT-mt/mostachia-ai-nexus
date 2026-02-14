interface IntegrationIconProps {
  name: string;
  icon: string;
}

export const IntegrationIcon = ({ name, icon }: IntegrationIconProps) => {
  return (
    <img
      src={icon}
      alt={name}
      className="w-7 h-7 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      loading="lazy"
      onError={(e) => {
        // Hide broken image and show fallback initial
        const target = e.currentTarget;
        target.style.display = 'none';
        const fallback = target.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = 'flex';
      }}
    />
  );
};

// Fallback component to use alongside IntegrationIcon
export const IntegrationIconWithFallback = ({ name, icon }: IntegrationIconProps) => {
  return (
    <div className="relative w-7 h-7">
      <IntegrationIcon name={name} icon={icon} />
      <div
        className="w-7 h-7 rounded bg-white/10 items-center justify-center text-[10px] font-bold text-muted-foreground hidden"
      >
        {name.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};
