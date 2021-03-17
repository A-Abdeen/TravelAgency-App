import styled from "styled-components/native";
import {Icon} from "native-base";


export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #e74c3c;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  background-color: #f1f6ff;
  padding-right: 30px;
  padding-left: 30px;
  width:100%;

`;

export const AuthTitle = styled.Text`
  color: #032c61;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #739993;
`;