import { Text, type TextProps } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

interface TypographyProps extends TextProps {
  variant?: "title" | "heading" | "body" | "label" | "caption";
  color?: "text" | "textSecondary" | "primary" | "error";
}

export function Typography({
  variant = "body",
  color,
  style,
  ...props
}: TypographyProps) {
  const { theme } = useUnistyles();

  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        color && { color: theme.colors[color] },
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  base: {
    color: theme.colors.text,
  },
  title: {
    fontSize: theme.typography.sizes["3xl"],
    fontWeight: theme.typography.weights.bold,
  },
  heading: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.semibold,
  },
  body: {
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.regular,
  },
  label: {
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.semibold,
  },
  caption: {
    fontSize: theme.typography.sizes.sm,
    fontWeight: theme.typography.weights.regular,
    color: theme.colors.textSecondary,
  },
}));
