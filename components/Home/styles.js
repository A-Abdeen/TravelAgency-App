import styled from "styled-components/native";
export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;
export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 60%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
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
  padding: 10px;
  background-color: #e74c33;
  margin-top: 25px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;

  font-size: 20px;
`;

export const AuthOther = styled.Text`
  color: #997379;
  margin-top: 15px;
`;
