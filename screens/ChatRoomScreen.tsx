import Message from '../components/Message'
import { View, StyleSheet } from 'react-native';

export default function ChatRoomScreen() {
  return (
    <View style={styles.page}>
      <Message />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
})