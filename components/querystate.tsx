import { ErrorState } from "./error-state";
import ListSkeleton from "./skeleton-list";

type Props = {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  children: React.ReactNode;
};

export const QueryState = ({
  isLoading,
  isError,
  error,
  children,
}: Props) => {

    
  if (isLoading) {
    return <ListSkeleton count={10} />;
  }

  if (isError) {
    return <ErrorState error={error} />;
  }

  return <>{children}</>;
};
