import { View, Text, StyleSheet } from 'react-native'

const blue = '#3777f0';
const grey = 'lightgrey';

const myID = 'u1'


const Message = ({ message }: any) => {
  const isMe = message.user.id === myID

  return (
    <View style={[
      styles.container,
      isMe ? styles.leftContainer : styles.rightContainer
    ]}>
      <Text style={{ color: isMe ? 'white' : 'black' }}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%'
  },
  leftContainer: { // me
    backgroundColor: '#3777f0',
    marginLeft: 10,
    marginRight: 'auto',
  },
  rightContainer: { // other user
    backgroundColor: 'lightgrey',
    marginLeft: 'auto',
    marginRight: 10
  },

})

export default Message;