import Message from '../components/Message'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/core'
import chatRoomData from '../assets/Chats'
import MessageInput from '../components/MessageInput';


export default function ChatRoomScreen() {
  const route = useRoute()

  console.warn(route.params)

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
})