import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { useUnistyles } from "react-native-unistyles";

export default function SettingsLayout() {
  const { theme } = useUnistyles();
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTintColor: theme.colors.text,
      }}
    >
      <Stack.Screen name="index" options={{ title: t("settings.title") }} />
    </Stack>
  );
}
