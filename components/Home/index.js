import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";
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
          <Title>Flights</Title>
        </TopStyling>
        <BottomStyling>
          <Text>
            {!user ? (
              <ButtonStyled onPress={() => navigation.navigate("Sign In")}>
                Sign In / Sign Up
              </ButtonStyled>
            ) : (
              <ButtonStyled onPress={() => dispatch(signout(navigation))}>
                Sign Out
              </ButtonStyled>
            )}
          </Text>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
