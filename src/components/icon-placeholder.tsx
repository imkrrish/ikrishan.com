"use client"

import { SquareIcon } from "lucide-react"
import { lazy, Suspense } from "react"
import type { IconLibraryName } from "shadcn/icons"

const IconLucide = lazy(() =>
  import("@/components/reg-icons/icon-lucide").then((mod) => ({
    default: mod.IconLucide,
  }))
)
const IconTabler = lazy(() =>
  import("@/components/reg-icons/icon-tabler").then((mod) => ({
    default: mod.IconTabler,
  }))
)

const IconHugeicons = lazy(() =>
  import("@/components/reg-icons/icon-hugeicons").then((mod) => ({
    default: mod.IconHugeicons,
  }))
)

const IconPhosphor = lazy(() =>
  import("@/components/reg-icons/icon-phosphor").then((mod) => ({
    default: mod.IconPhosphor,
  }))
)

const IconRemixicon = lazy(() =>
  import("@/components/reg-icons/icon-remixicon").then((mod) => ({
    default: mod.IconRemixicon,
  }))
)

// Preload all icon renderer modules so switching libraries is instant.
// These warm the browser module cache; React.lazy resolves immediately
// for modules that are already loaded.
void import("@/components/reg-icons/icon-lucide")
void import("@/components/reg-icons/icon-tabler")
void import("@/components/reg-icons/icon-hugeicons")
void import("@/components/reg-icons/icon-phosphor")
void import("@/components/reg-icons/icon-remixicon")

const iconLibrary: IconLibraryName = "lucide"

export function IconPlaceholder({
  ...props
}: {
  [K in IconLibraryName]: string
} & React.ComponentProps<"svg">) {
  const iconName = props[iconLibrary]

  if (!iconName) {
    return null
  }

  return (
    <Suspense fallback={<SquareIcon {...props} />}>
      {iconLibrary === "lucide" && <IconLucide name={iconName} {...props} />}
      {iconLibrary === "tabler" && <IconTabler name={iconName} {...props} />}
      {iconLibrary === "hugeicons" && (
        <IconHugeicons name={iconName} {...props} />
      )}
      {iconLibrary === "phosphor" && (
        <IconPhosphor name={iconName} {...props} />
      )}
      {iconLibrary === "remixicon" && (
        <IconRemixicon name={iconName} {...props} />
      )}
    </Suspense>
  )
}
