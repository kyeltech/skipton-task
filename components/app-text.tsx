import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type AppTextProps = TextProps & {
  lightColor: string;
  darkColor: string;
  type: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'small';
};

export function AppText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: Partial<AppTextProps>) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const textType = 
    type === 'title' 
    ? styles.title 
    :  type === 'subtitle'
    ? styles.subtitle 
    : type === 'defaultSemiBold'
    ? styles.defaultSemiBold
    : type === 'link' 
    ? styles.link 
    : type === 'small' 
    ? styles.small 
    :  styles.default


  return (
    <Text
      style={[
        { color },
        textType,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  small:{
    fontSize: 12,
    color: '#ddd'
  }
});
