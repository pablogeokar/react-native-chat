import Message from '../components/Message'
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import chatRoomData from '../assets/Chats'
import MessageInput from '../components/MessageInput';


export default function ChatRoomScreen() {
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