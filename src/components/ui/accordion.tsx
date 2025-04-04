import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          // Fixed height h-16, increased font size (text-lg), padding, and word wrapping enabled.
          "focus-visible:border-ring focus-visible:ring-ring/50 flex items-center justify-between gap-4 rounded-md h-16 px-4 text-left text-lg font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 break-words",
          className
        )}
        {...props}
      >
        <span className="flex-1 break-words">{children}</span>
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        // Fixed height h-32 with vertical scrolling and word wrapping enabled; increased font size
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-y-auto text-lg h-32 break-words",
        className
      )}
      {...props}
    >
      <div className={cn("px-4 pt-2 pb-4 leading-relaxed break-words", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }