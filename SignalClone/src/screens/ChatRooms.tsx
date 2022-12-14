import Message from '../components/Message'
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core'
import chatRoomData from '../../assets/Chats'
import MessageInput from '../components/MessageInput';


export default function ChatRoom() {
  const route = useRoute()
  const navigation = useNavigation()

  navigation.setOptions({ title: 'Elon Musk' })

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