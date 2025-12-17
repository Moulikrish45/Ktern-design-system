// Core Components - Atoms
export { Button } from './components/atoms/Button'
export type { ButtonProps } from './components/atoms/Button'

export { Input } from './components/atoms/Input'

export { StatusBadge } from './components/atoms/StatusBadge'
export type { StatusBadgeProps } from './components/atoms/StatusBadge'


// Molecules
export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from './components/molecules/Card'

// Foundation / Layout Primitives
export { Box } from './components/foundation/Box'
export type { BoxProps } from './components/foundation/Box'

export { Stack } from './components/foundation/Stack'
export type { StackProps } from './components/foundation/Stack'

export { Grid } from './components/foundation/Grid'
export type { GridProps } from './components/foundation/Grid'

export { Container } from './components/foundation/Container'
export type { ContainerProps } from './components/foundation/Container'

// Interactive Components
export { Skeleton } from './components/atoms/Skeleton'
export type { SkeletonProps } from './components/atoms/Skeleton'

export { Avatar } from './components/atoms/Avatar'
export type { AvatarProps } from './components/atoms/Avatar'

export { Switch } from './components/atoms/Switch'
export type { SwitchProps } from './components/atoms/Switch'

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
} from './components/molecules/DropdownMenu'

// Note: Add more component exports as they're created with the generator
// export { Label } from './components/atoms/Label'
// export { Textarea } from './components/atoms/Textarea'

// Utilities
export { ThemeSwitcher } from './components/utilities/ThemeSwitcher'
export type { ThemeSwitcherProps } from './components/utilities/ThemeSwitcher'

// Theme Management
export {
    getTheme,
    setTheme,
    toggleTheme,
    getResolvedTheme,
    initializeTheme,
    applyCustomTheme,
    resetCustomTheme
} from './lib/theme'
export type { Theme, ResolvedTheme, CustomTheme } from './lib/theme'

// Utilities
export { cn } from './lib/utils'

// Icons (re-export from lucide-react for convenience)
export {
    Calendar,
    ArrowRight,
    Users,
    CircleDot,
    Sun,
    Moon,
    Monitor
} from 'lucide-react'

// Custom Icons
export {
    RocketIcon,
    FlaskIcon,
    EnterpriseIcon
} from './components/icons'
