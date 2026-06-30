"use client"

import { IconCheck, IconCopy, IconX } from "@tabler/icons-react"
import { motion } from "motion/react"
import type { ComponentProps } from "react"

import type { Button as ButtonType } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import type { Event } from "@/lib/events"
import { trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"

import { IconPlaceholder } from "./icon-placeholder"
import { IconSwap, IconSwapItem } from "./icon-swap"

export type CopyStateIconProps = {
  state: CopyState
  /** Custom icon for idle state. */
  idleIcon?: React.ReactNode
  /** Custom icon for done state. */
  doneIcon?: React.ReactNode
  /** Custom icon for error state. */
  errorIcon?: React.ReactNode
}

export type CopyButtonProps = ComponentProps<typeof ButtonType> & {
  /** The text to copy, or a function that returns the text. */
  text: string | (() => string)
  /** Called with the copied text on successful copy. */
  onCopySuccess?: (text: string) => void
  /** Called with the error if the copy operation fails. */
  onCopyError?: (error: Error) => void
} & Omit<CopyStateIconProps, "state">

export function CopyStateIcon({
  state,
  idleIcon,
  doneIcon,
  errorIcon,
}: CopyStateIconProps) {
  return (
    <IconSwap>
      <IconSwapItem key={state} as={motion.span}>
        {state === "idle" &&
          (idleIcon ?? (
            <IconPlaceholder
              data-slot="idle-icon"
              lucide="CopyIcon"
              tabler="IconCopy"
              hugeicons="Copy01Icon"
              phosphor="CopyIcon"
              remixicon="RiFileCopyLine"
            />
          ))}

        {state === "done" &&
          (doneIcon ?? (
            <IconPlaceholder
              data-slot="done-icon"
              lucide="CheckIcon"
              tabler="IconCheck"
              hugeicons="Tick02Icon"
              phosphor="CheckIcon"
              remixicon="RiCheckLine"
            />
          ))}

        {state === "error" &&
          (errorIcon ?? (
            <IconPlaceholder
              data-slot="error-icon"
              lucide="CircleXIcon"
              tabler="IconX"
              hugeicons="CancelCircleIcon"
              phosphor="XCircleIcon"
              remixicon="RiCloseCircleLine"
            />
          ))}
      </IconSwapItem>
    </IconSwap>
  )
}

export function CopyButtonPrimitive({
  className,
  size = "icon",
  children,
  text,
  idleIcon,
  doneIcon,
  errorIcon,
  onClick,
  onCopySuccess,
  onCopyError,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError,
  })

  return (
    <Button
      className={cn("will-change-transform", className)}
      size={size}
      onClick={(e) => {
        copy(text)
        onClick?.(e)
      }}
      aria-label="Copy"
      {...props}
    >
      <CopyStateIcon
        state={state}
        idleIcon={idleIcon}
        doneIcon={doneIcon}
        errorIcon={errorIcon}
      />
      {children}
    </Button>
  )
}

export function CopyButton({
  size = "icon-sm",
  event,
  ...props
}: CopyButtonProps & {
  event?: Event["name"]
}) {
  return (
    <CopyButtonPrimitive
      variant="secondary"
      size={size}
      idleIcon={<IconCopy />}
      doneIcon={<IconCheck />}
      errorIcon={<IconX />}
      onCopySuccess={(copiedValue) => {
        if (event) {
          trackEvent({
            name: event,
            properties: {
              code: copiedValue,
            },
          })
        }
      }}
      {...props}
    />
  )
}
