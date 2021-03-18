import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";

// Styling
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "./styles";

import {
  AuthButton,
  AuthButtonText,
  AuthContainer,
  AuthOther,
  AuthTextInput,
  AuthTitle,
} from "./styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <HomeBackground
      source={{
        uri:
          "https://s2.best-wallpaper.net/wallpaper/iphone/1305/The-plane-flying-at-sunset-airliner-photography_iphone_750x1334.jpg",
      }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Pringles</Title>
        </TopStyling>
        <BottomStyling>
          <AuthContainer>
            {!user ? (
              <>
                <AuthButton onPress={() => navigation.navigate("Search Form")}>
                  <AuthButtonText>Search Flights</AuthButtonText>
                </AuthButton>
                <AuthButton onPress={() => navigation.navigate("Sign In")}>
                  <AuthButtonText>Sign In</AuthButtonText>
                </AuthButton>
                <AuthButton onPress={() => navigation.navigate("Sign Up")}>
                  <AuthButtonText>Sign Up</AuthButtonText>
                </AuthButton>
              </>
            ) : (
              <>
                <AuthButton onPress={() => navigation.navigate("Search Form")}>
                  <AuthButtonText>Search Flights</AuthButtonText>
                </AuthButton>
                <AuthButton onPress={() => navigation.navigate("Profile")}>
                  <AuthButtonText>Update Profile</AuthButtonText>
                </AuthButton>
                <AuthButton onPress={() => dispatch(signout(navigation))}>
                  <AuthButtonText>Sign Out, {user.username} ?</AuthButtonText>
                </AuthButton>
              </>
            )}
          </AuthContainer>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
