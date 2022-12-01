
import { View, Image, Text, StyleSheet } from 'react-native'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
        }}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hla Hola coca cola dsfaf fdsafa fdasf fdsafafa fadsfafda dsafadfadf fdsafafa</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3
  },
  text: {
    color: 'grey'
  }
})

