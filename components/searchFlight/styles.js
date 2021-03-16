import styled from "styled-components/native";
import {Icon} from "native-base";

export const FlightIconStyled = styled(Icon)`
  color: #997379;
  margin-right: 10px;
  
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

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #f1f6ff;
  padding-right: 60px;
  padding-left: 60px;
  margin:20px;
  padding:25px;
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


export const AuthOther = styled.Text`
  color: black;
  margin-top: 15px;
  margin-right:22px;
`;

export const AuthTitle = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
  border-bottom-color: black;
`;