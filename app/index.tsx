
import { AppStyle } from '@/commons/global_style';
import AppScreen from '@/components/app-screen-wrapper';
import { AppText } from '@/components/app-text';
import { AppView } from '@/components/app-view';
import { QueryState } from '@/components/querystate';
import { FlatList, Image } from 'react-native';
import { useGetBlogPost } from './api/service/useRequest';
import { BlogPostList } from './api/type';

const HomeScreen: React.FC = () => {
  const { data, isLoading, isError, error } = useGetBlogPost()

  const renderItem = ({ item }: { item: BlogPostList }) => {
    const publishedDate = item.publishedAt.split(' ')[0];
    return (
      <AppView style={AppStyle.listCard} >
        <AppView style={AppStyle.cardIndexItem}>
          <Image source={{ uri: item.thumbnail }} width={29} height={29} style={AppStyle.imageRadius} />
          <AppView style={AppStyle.cardTextFluid}>
            <AppText >{item.slug}</AppText>
            <AppView style={AppStyle.flexRow}>
              <AppText type='small'>status: </AppText>
              <AppText type='small' style={{ color: item.status === 'published' ? 'green' : 'red' }}> {item.status}</AppText>
            </AppView>
            <AppText type='small'>{`Published At: ${publishedDate}`}</AppText>
          </AppView>
        </AppView>
      </AppView>
    )
  }
  return (
    <AppScreen
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <AppView>
        <AppText type="title">Blog List</AppText>

        <QueryState
          isLoading={isLoading}
          isError={isError}
          error={error}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            initialNumToRender={6}
            removeClippedSubviews
          />
        </QueryState>
      </AppView>

    </AppScreen>
  );
}

export default HomeScreen;