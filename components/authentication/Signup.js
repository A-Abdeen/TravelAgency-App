import React, { useState } from "react";

import { Text, View, Button } from "native-base";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
//Styling
import { AuthButton, AuthButtonText, AuthContainer, AuthOther, AuthTextInput, AuthTitle } from './styles';


const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  //--------------------HandleSubmit

  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };

  return (
    <AuthContainer>
      <AuthTitle>Sign up</AuthTitle>
      <AuthTextInput
        placeholder="username"
        placeholderTextColor="#997379"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <AuthTextInput
        placeholder="password"
        placeholderTextColor="#997379"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <AuthTextInput
        placeholder="email"
        placeholderTextColor="#997379"
        onChangeText={(email) => setUser({ ...user, email })}
      />

      <AuthButton  onPress={handleSubmit}>
      <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton >
      <AuthOther onPress={() => navigation.navigate("Sign In")}>
        Already have an account? Sign In!
      </AuthOther>
      </AuthContainer>
  );
};

export default Signup;
