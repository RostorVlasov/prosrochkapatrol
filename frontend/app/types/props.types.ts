import type { IconName } from "~/components/ui/AppIcon.vue"

export interface FaqItem {
  q: string
  a: string
  html?: boolean
}

export interface FaqCategory {
  icon: IconName
  title: string
}

export interface BenefitItemProps {
  icon: IconName
  title: string
  titleItalic?: string
  desc: string
}

export interface BenefitRowProps {
  icon: IconName
  title: string
  subtitle: string
  panelClass: string
  titleClass: string
  subtitleClass: string
  items: BenefitItemProps[]
}

export interface StatCardProps {
  icon: IconName
  value: string
  title: string
  desc: string
}

export interface StepCardProps {
  number: number
  title: string
  desc: string
}

export interface ProcessStepProps {
  index: number
  icon: IconName
  title: string
  desc: string
}

export interface TeamMemberCardProps {
  initials: string
  name: string
  role: string
  quote: string
  bgClass: string
  borderClass: string
  avatarBgClass: string
  avatarTextClass: string
}

export interface TestimonialCardProps {
  text: string
  author: string
  location: string
}

export interface SocialLinkProps {
  href: string
  icon: IconName
  name: string
  handle: string
  desc: string
  iconBgClass: string
  hoverBorderClass: string
}

export interface ContactButtonProps {
  href: string
  icon: IconName
  label: string
  bgClass: string
  textClass: string
}

export interface TeamInfoCardProps {
  icon: IconName
  title: string
  desc: string
}

export interface PrincipleProps {
  icon: IconName
  title: string
  desc: string
}

export interface BadgePerkProps {
  text: string
}