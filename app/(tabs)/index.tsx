
import { AppStyle } from '@/commons/global_style';
import AppScreen from '@/components/app-screen-wrapper';
import { ThemedText } from '@/components/app-text';
import { AppView } from '@/components/app-view';

export default function HomeScreen() {
  return (
    <AppScreen
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      >
      <AppView style={AppStyle.stepContainer}>
        <ThemedText type="subtitle">Hello world</ThemedText>
      </AppView>
    </AppScreen>
  );
}

