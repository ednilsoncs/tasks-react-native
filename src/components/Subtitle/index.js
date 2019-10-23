import styled from 'styled-components/native';
import { colors } from '../../theme';

const Subtitle = styled.Text`
  color: ${colors.green};
  font-size: 15;
  text-transform: ${(props) => (props.isUppercase ? 'upercase' : 'none')}
`;
export default Subtitle;
