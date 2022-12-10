import { StyleSheet, FlatList, SafeAreaView } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem'

import chatRoomData from '../../assets/ChatRooms'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}        
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
})