import styled from 'styled-components/native';
import { colors } from '../../theme';

const Card = styled.View`
min-height: 50px;
width: 100%;
background-color: ${colors.white};
border-radius: 8px;
margin: 10px 0;
elevation: 1;
padding: 20px;
`;

export default Card;
