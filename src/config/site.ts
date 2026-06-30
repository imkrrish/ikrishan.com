import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://ikrishan.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Resume",
    href: "https://assets.ikrishan.com/Krishan_Kumar_FullStack_Resume.pdf",
    isExternal: true,
  },
]

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

export const X_HANDLE = "@_Krrish_001"
export const GITHUB_USERNAME = "imkrrish"
export const SOURCE_CODE_GITHUB_REPO = "imkrrish/ikrishan.com"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/imkrrish/ikrishan.com"

export const SPONSORSHIP_URL = "https://github.com/sponsors/imkrrish"

export const UTM_PARAMS = {
  utm_source: "ikrishan.com",
}
