import { radius, spacing, typography } from "./tokens";

export const lightTheme = {
  colors: {
    background: "#FFFFFF",
    surface: "#F5F5F5",
    text: "#1A1A1A",
    textSecondary: "#6B7280",
    primary: "#3B82F6",
    primaryText: "#FFFFFF",
    border: "#E5E7EB",
    error: "#EF4444",
    success: "#22C55E",
    card: "#FFFFFF",
    tabBar: "#FFFFFF",
    tabBarInactive: "#9CA3AF",
  },
  spacing,
  radius,
  typography,
} as const;

export const darkTheme = {
  colors: {
    background: "#0A0A0A",
    surface: "#1A1A1A",
    text: "#F5F5F5",
    textSecondary: "#9CA3AF",
    primary: "#60A5FA",
    primaryText: "#FFFFFF",
    border: "#374151",
    error: "#F87171",
    success: "#4ADE80",
    card: "#1A1A1A",
    tabBar: "#0A0A0A",
    tabBarInactive: "#6B7280",
  },
  spacing,
  radius,
  typography,
} as const;

export type AppTheme = typeof lightTheme;
