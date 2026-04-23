import { colors } from './colors';

export const popupSx = {
  overlay: {
    background: `rgba(0, 0, 0, 0.5)`,
    backdropFilter: 'blur(4px)',
  },
  modal: {
    background: colors.surface,
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  lightbox: {
    background: `rgba(0, 0, 0, 0.9)`,
  },
  tooltip: {
    background: colors.text,
    color: colors.textLight,
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
  },
} as const;

export const textSx = {
  heading: {
    color: colors.text,
    fontWeight: 700,
  },
  subheading: {
    color: colors.text,
    fontWeight: 600,
  },
  body: {
    color: colors.text,
    fontWeight: 400,
    lineHeight: '1.5',
  },
  muted: {
    color: colors.muted,
    fontWeight: 400,
  },
  accent: {
    color: colors.accent,
    fontWeight: 600,
  },
  error: {
    color: colors.error,
    fontWeight: 500,
  },
  success: {
    color: colors.success,
    fontWeight: 500,
  },
  selectable: {
    userSelect: 'text',
  },
} as const;

export const buttonSx = {
  primary: {
    background: colors.primary,
    color: colors.surface,
    '&:hover': {
      background: colors.secondary,
      transform: 'scale(1.03)',
    },
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  secondary: {
    background: colors.secondary,
    color: colors.surface,
    '&:hover': {
      background: colors.primary,
      transform: 'scale(1.03)',
    },
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  outline: {
    background: 'transparent',
    border: `2px solid ${colors.primary}`,
    color: colors.primary,
    '&:hover': {
      background: colors.primary,
      color: colors.surface,
    },
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
} as const;

export const cardSx = {
  default: {
    background: colors.surface,
    border: `1px solid ${colors.muted}`,
    borderRadius: '0.5rem',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-4px)',
    },
  },
  elevated: {
    background: colors.surface,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    padding: '1.5rem',
  },
} as const;
