import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Text>Modal Screen</Text>
      <Button title="Close Modal" onPress={() => router.back()} />
    </View>
  );
}
