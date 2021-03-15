import styled from "styled-components/native";
import { TextInput } from "react-native";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #f1f6ff;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: #032c61;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #739993;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #032c61;
  border-bottom-color: #032c61;
  border-bottom-width: 1px;
`;

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

export const AuthOther = styled.Text`
  color: #997379;
  margin-top: 15px;
`;
