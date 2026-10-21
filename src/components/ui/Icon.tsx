import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code,
  Database,
  GitBranch,
  GraduationCap,
  Languages,
  MapPin,
  MonitorSmartphone,
  Sprout,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../../types/cv'

const ICONS: Record<IconName, LucideIcon> = {
  location: MapPin,
  education: GraduationCap,
  work: BriefcaseBusiness,
  learning: Sprout,
  certificate: Award,
  languages: Languages,
  code: Code,
  devices: MonitorSmartphone,
  database: Database,
  ml: BrainCircuit,
  automation: Workflow,
  process: GitBranch,
  team: Users,
}

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

/** Line icon from Lucide. Colour comes from the --icon token (black / light green). */
export function Icon({ name, className, size = 24 }: IconProps) {
  const Component = ICONS[name]
  return <Component className={className} size={size} strokeWidth={1.75} color="var(--icon)" aria-hidden="true" />
}
