import { Button, Text, View } from "native-base";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

import { AuthTextInput, AuthOther } from "./styles";
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
    <View>
      <Text>Signin Page</Text>
      <Text>Username</Text>
      <AuthTextInput
        placeholder="Username"
        placeholderTextColor="grey"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <Text>Password</Text>

      <AuthTextInput
        placeholder="Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Button onPress={handleSubmit}>
        <Text>Sign in</Text>
      </Button>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        New User ? register!
      </AuthOther>
    </View>
  );
};

export default Signin;
