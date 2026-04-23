export const colors = {
  primary: '#2D6A4F',
  secondary: '#40916C',
  accent: '#F4A261',
  background: '#FAFAF8',
  backgroundDark: '#1A1A2E',
  text: '#2B2D42',
  textLight: '#E8E8E8',
  muted: '#8D99AE',
  surface: '#FFFFFF',
  surfaceDark: '#252540',
  success: '#52B788',
  error: '#E63946',
  warning: '#F4A261',
} as const;

export type ColorKey = keyof typeof colors;

export const getColor = (key: ColorKey): string => colors[key];

export const colorWithOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
