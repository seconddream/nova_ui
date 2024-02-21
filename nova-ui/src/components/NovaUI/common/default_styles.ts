const PrimaryColor = {
  text: 'text-white',
  bg: 'bg-slate-700',
  hoverText: 'hover:text-white',
  hoverBg: 'hover:bg-indigo-400',
}

const SecondaryColor = {
  text: 'text-slate-700',
  bg: 'bg-slate-200',
  hoverText: 'hover:text-white',
  hoverBg: 'hover:bg-indigo-400',
}

const TransparentColor = {
  text: 'text-slate-700',
  bg: 'bg-transparent',
  hoverText: 'hover:text-white',
  hoverBg: 'hover:bg-indigo-400',
}

const SlientColor = {
  text: 'text-slate-700',
  bg: 'bg-transparent',
  hoverText: 'hover:text-slate-600',
  hoverBg: 'hover:trasparent',
}

const SuccessColor = {
  text: 'text-emerald-700',
  bg: 'bg-emerald-200',
  hoverText: 'hover:text-emerald-700',
  hoverBg: 'hover:bg-emeral-100'
}

const WarningColor = {
  text: 'text-amber-700',
  bg: 'bg-amber-200',
  hoverText: 'hover:text-amber-700',
  hoverBg: 'hover:bg-amber-200'
}

const DangerColor = {
  text: 'text-rose-700',
  bg: 'bg-rose-200',
  hoverText: 'hover:text-rose-700',
  hoverBg: 'hover:bg-rose-200'
}

const DisabledColor = {
  text: 'text-slate-400',
  bg: 'bg-slate-200',
}

export const ColorTheme = {
  primary: PrimaryColor,
  secondary: SecondaryColor,
  transparent: TransparentColor,
  slient: SlientColor,
  success: SuccessColor,
  warning: WarningColor,
  danger: DangerColor,
  disabled: DisabledColor,
}

export const ItemSizing = {
  Height: {
    lg: 'h-12',
    md: 'h-10',
    sm: 'h-8',
    xs: 'h-6',
  },
  Width: {
    lg: 'w-12',
    md: 'w-10',
    sm: 'w-8',
    xs: 'w-6',
  },
  PaddingX: {
    lg: 'px-3.5',
    md: 'px-2.5',
    sm: 'px-2.5',
    xs: 'px-2',
  },
  FontSize: {
    lg: 'text-base',
    md: 'text-sm',
    sm: 'text-xs',
    xs: 'text-xs',
  },
  IconSize: {
    lg: 'text-2xl',
    md: 'text-lg',
    sm: 'text-base',
    xs: 'text-base',
  },
  RoundCorner: {
    lg: 'rounded-lg',
    md: 'rounded-lg',
    sm: 'rounded-md',
    xs: 'rounded-md',
  },
  Gap: {
    lg: 'gap-2.5',
    md: 'gap-2.5',
    sm: 'gap-2',
    xs: 'gap-1.5',
  }
}

export const BorderTheme = {
  Item: 'border-1 border-slate-300'
}

export const FocusStyle = {
  Item: 'ring-indigo-300 ring-offset-2'
}