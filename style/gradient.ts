import { colors } from './colors';

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
  primaryAccent: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
  success: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.success} 100%)`,
  warm: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
  dark: `linear-gradient(135deg, ${colors.backgroundDark} 0%, ${colors.surfaceDark} 100%)`,
  light: `linear-gradient(135deg, ${colors.background} 0%, ${colors.surface} 100%)`,
  error: `linear-gradient(135deg, ${colors.error} 0%, ${colors.warning} 100%)`,
} as const;

export const radialGradients = {
  center: `radial-gradient(circle at center, ${colors.primary} 0%, ${colors.backgroundDark} 100%)`,
  topRight: `radial-gradient(circle at top right, ${colors.accent} 0%, ${colors.background} 100%)`,
} as const;

export type GradientKey = keyof typeof gradients;
export type RadialGradientKey = keyof typeof radialGradients;

export const getGradient = (key: GradientKey): string => gradients[key];
export const getRadialGradient = (key: RadialGradientKey): string =>
  radialGradients[key];
