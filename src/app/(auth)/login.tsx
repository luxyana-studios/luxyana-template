import { LoginForm } from "@/features/auth/components/LoginForm";
import { ScreenContainer } from "@/shared/components/ScreenContainer";

export default function LoginScreen() {
  return (
    <ScreenContainer centered>
      <LoginForm />
    </ScreenContainer>
  );
}
