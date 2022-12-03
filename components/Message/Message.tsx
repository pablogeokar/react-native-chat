import { View, Text, StyleSheet } from 'react-native'

const blue = '#3777f0';
const grey = 'lightgrey';


const Message = () => {
  const isMe = true

  return (
    <View style={[styles.container, {
      backgroundColor: isMe ? grey : blue,
      marginLeft: isMe ? 'auto' : 10
    }]}>
      <Text style={{ color: isMe ? 'black' : 'white' }}>Message</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: '75%',
  },
  text: {
    color: 'white',
  }
})

export default Message;