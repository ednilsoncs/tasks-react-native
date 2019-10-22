import styled from 'styled-components/native';
import { colors } from '../../theme';

const Title = styled.Text`
  color: ${colors.black};
  text-transform: ${(props) => (props.isUppercase ? 'upercase' : 'none')}
`;
export default Title;
