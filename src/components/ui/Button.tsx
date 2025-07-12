'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-[#8b5cf6] text-white hover:bg-[#7c3aed] focus-visible:ring-[#8b5cf6]",
        secondary: "bg-[#3b82f6] text-white hover:bg-[#2563eb] focus-visible:ring-[#3b82f6]",
        accent: "bg-[#FF6B6B] text-white hover:bg-[#ff5252] focus-visible:ring-[#FF6B6B]",
        outline: "border border-[#8b5cf6] text-[#8b5cf6] bg-transparent hover:bg-[#8b5cf6]/10",
        ghost: "hover:bg-[#8b5cf6]/10 hover:text-[#8b5cf6] text-white",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 
