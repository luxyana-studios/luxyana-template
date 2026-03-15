import { Link } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { Button } from "@/shared/components/Button";
import { TextInput } from "@/shared/components/TextInput";
import { Typography } from "@/shared/components/Typography";
import { useAuth } from "../hooks/useAuth";

export function LoginForm() {
  const { t } = useTranslation();
  const { signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(t("common.error"), (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Typography variant="title" style={styles.title}>
        {t("auth.login")}
      </Typography>
      <TextInput
        placeholder={t("auth.email")}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder={t("auth.password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={t("auth.login")} onPress={handleLogin} loading={loading} />
      <Link href="/(auth)/signup" style={styles.link}>
        <Typography variant="body" color="primary">
          {t("auth.noAccount")}
        </Typography>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  title: {
    textAlign: "center" as const,
    marginBottom: theme.spacing.lg,
  },
  link: {
    alignSelf: "center" as const,
    marginTop: theme.spacing.sm,
  },
}));
