import { AppText } from "./app-text";
import { AppView } from "./app-view";

export const ErrorState = ({
  error,
}: {
  error: unknown;
}) => (
  <AppView>
   <AppText>
  {error instanceof Error
    ? error.message
    : 'We couldn’t load this content.'}
</AppText>
  </AppView>
);
