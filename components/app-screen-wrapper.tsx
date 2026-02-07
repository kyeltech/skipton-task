import { AppStyle } from '@/commons/global_style';
import { AppView } from '@/components/app-view';
import { useThemeColor } from '@/hooks/use-theme-color';
import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props = PropsWithChildren<{
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function AppScreen({
  children,
}: Props) {
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <SafeAreaView
      style={[AppStyle.safeViewWrapper,{backgroundColor}]}
     >
      <AppView style={AppStyle.content}>{children}</AppView>
    </SafeAreaView>
  );
}
