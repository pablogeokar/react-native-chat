
import { View, StyleSheet, FlatList } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem/ChatRoomItem'

import chatRoomData from '../assets/ChatRooms'

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
})