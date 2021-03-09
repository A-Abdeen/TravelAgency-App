import { Button, Text } from "native-base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { signout } from "../store/actions/authActions";
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
          <ButtonStyled onPress={() => navigation.navigate("Signin")}>
            Signin
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
