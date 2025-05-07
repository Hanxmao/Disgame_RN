
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PostDetailScreen() {
  const { postId } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post Detail Screen</Text>
      <Text>Post ID: {postId}</Text>
    </View>
  );
}
