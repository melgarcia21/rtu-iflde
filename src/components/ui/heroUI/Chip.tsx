import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      },
      color: {
        default: "bg-gray-200 text-gray-800",
        primary: "bg-blue-500 text-white",
        secondary: "bg-purple-500 text-white",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-black",
        danger: "bg-red-500 text-white",
      },
      variant: {
        solid: "",
        bordered: "border border-current",
        light: "bg-opacity-20",
        flat: "shadow-none",
        faded: "opacity-75",
        shadow: "shadow-md",
        dot: "relative before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-current before:mr-2",
        gradient: "drop-shadow shadow-black text-white bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
        },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
      variant: "solid",
      radius: "full",
    },
  }
);

interface ChipProps
  extends Omit<React.ComponentProps<"span">, "color">,
    VariantProps<typeof chipVariants> {
  asChild?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

const Chip = React.forwardRef<React.ComponentRef<"span">, ChipProps>(
  ({ className, size, color, variant, radius, asChild = false, ...props }) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        className={cn(chipVariants({ size, color: color ?? "default", variant, radius }), className)}
        {...props}
      />
    );
  }
);

Chip.displayName = "Chip";

export { Chip, chipVariants };