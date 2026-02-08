import { AppStyle } from '@/commons/global_style';
import React, { FC } from 'react';
import { View } from 'react-native';

interface ListSkeletonProps {
  count: number;
}
const ListSkeleton: FC<ListSkeletonProps> = ({ count = 5 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
         <View key={index} style={AppStyle.card}>
          <View style={AppStyle.row}>
            <View style={AppStyle.thumbnail} />

            <View style={AppStyle.textContainer}>
              <View style={AppStyle.titleLine} />
              <View style={AppStyle.subtitleLine} />
            </View>
          </View>

          <View style={AppStyle.metaRow}>
            <View style={AppStyle.metaLeft} />
            <View style={AppStyle.metaRight} />
          </View>
        </View>
      ))}
    </>
  );
};
export default ListSkeleton;
