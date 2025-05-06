import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button title="Go to Post Detail (id: 123)" onPress={() => router.push('/(tabs)/(home)/post/post123')} />
      <Button title="Open Modal" onPress={() => router.push('/(tabs)/(home)/modal')} />
    </View>
  );
}
