import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import { updateUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
// import { EditableInput } from "react-form-editables";
import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthTextInput,
  AuthTitle,
} from "./styles";

const Profile = ({ navigation, user }) => {
  //   const _user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const [_user, setUser] = useState({
    ...user,
    username: "",
    email: "",
  });

  const handleSubmit = () => {
    dispatch(updateUser(_user));

    navigation.replace("Home");
  };

  return (
    <AuthContainer>
      <AuthTitle> Profile Update</AuthTitle>
      <AuthTextInput
        placeholder={`Enter new username`}
        placeholderTextColor="#997379"
        onChangeText={(username) => setUser({ ...user, username })}
      />

      <AuthTextInput
        placeholder={`Enter new email`}
        placeholderTextColor="#997379"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Update</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default Profile;
