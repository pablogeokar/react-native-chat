import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack.routes'

export function Navigation() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}