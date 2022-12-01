import { View, Image, Text } from 'react-native'
import styles from './styles'

export default function ChatRoomItem() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }} style={styles.image} />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hola Hola coca cola dsfaf fdsafa fdasf fdsafafa fadsfafda dsafadfadf fdsafafa</Text>
      </View>
    </View>

  )
}

