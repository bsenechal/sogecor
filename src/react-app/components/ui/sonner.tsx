import { type CSSProperties } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

// Le site est exclusivement en thème clair (aucun ThemeProvider).
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
