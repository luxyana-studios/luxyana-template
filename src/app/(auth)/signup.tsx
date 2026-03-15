import { SignupForm } from "@/features/auth/components/SignupForm";
import { ScreenContainer } from "@/shared/components/ScreenContainer";

export default function SignupScreen() {
  return (
    <ScreenContainer centered>
      <SignupForm />
    </ScreenContainer>
  );
}
