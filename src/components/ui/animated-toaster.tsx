import { useToast } from "@/hooks/use-toast";
import { AnimatePresence } from "framer-motion";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/animated-toast";

export function AnimatedToaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <AnimatePresence mode="popLayout">
        {toasts.map(function ({ id, title, description, action, variant, ...props }) {
          return (
            <Toast key={id} variant={variant as any} {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
              {action}
              <ToastClose />
            </Toast>
          );
        })}
      </AnimatePresence>
      <ToastViewport />
    </ToastProvider>
  );
}
