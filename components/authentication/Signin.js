import { Button, Text, View } from "native-base";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
//Styling 
import { AuthButton, AuthButtonText, AuthContainer, AuthOther, AuthTextInput, AuthTitle } from "./styles";

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput 
        placeholder="Username"
        placeholderTextColor="#997379"
        onChangeText={(username) => setUser({ ...user, username })}
      />

      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="#997379"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthButton onPress={handleSubmit}>
      <AuthButtonText>Sign In</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Sign Up")}>
        New User ? Register!
      </AuthOther>
      </AuthContainer>
  );
};

export default Signin;
