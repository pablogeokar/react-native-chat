import { View, Image, Text, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRooms from "../screens/ChatRooms";
import Home from "../screens/Home";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShadowVisible: false }}>
      <Screen name='Signal' component={Home} options={{ headerBackTitleVisible: false, headerTitle: ChatRoomHeader }} />
      <Screen name='chatRooms' component={ChatRooms} />
    </Navigator>
  )
}

/** Home Header */
const ChatRoomHeader = (props: any) => {
  const { width } = useWindowDimensions()
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      //marginLeft: 25,
      width: width - 10,
      padding: 10,
      alignItems: 'center'
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 30 }} />
      <Text style={{ flex: 1, marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
      <Feather name='camera' size={24} style={{ marginHorizontal: 10 }} />
      <Feather name='edit-2' size={24} style={{ marginHorizontal: 10 }} />
    </View>
  )
}

