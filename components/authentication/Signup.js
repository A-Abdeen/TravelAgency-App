import React, { useState } from "react";

import { Text, View, Button } from "native-base";
import { useDispatch } from "react-redux";
import { AuthTextInput, AuthOther } from "./styles";
import { signup } from "../../store/actions/authActions";

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
    <View>
      <Text>Username</Text>
      <AuthTextInput
        placeholder="username"
        placeholderTextColor="grey"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <Text>Password</Text>
      <AuthTextInput
        placeholder="password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Text>Email</Text>
      <AuthTextInput
        placeholder="email"
        placeholderTextColor="grey"
        onChangeText={(email) => setUser({ ...user, email })}
      />

      <Button onPress={handleSubmit}>
        <Text>Sign Up</Text>
      </Button>
      <AuthOther onPress={() => navigation.navigate("Sign In")}>
        Already have an account? Sign In!
      </AuthOther>
    </View>
  );
};

export default Signup;
