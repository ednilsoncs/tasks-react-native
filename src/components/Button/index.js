import Button from 'react-native'
import { colors } from '../../theme';
const Button = ({isLoading,children,...props }) => (
  <Button
    title={children}
    color={colors.blue}
    onPress ={...props}
  /> 
  )