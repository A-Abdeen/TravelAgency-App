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
          <>
            {!user ? (
              <>
                <ButtonStyled onPress={() => navigation.navigate("Sign In")}>
                  | Sign In |
                </ButtonStyled>
                <ButtonStyled onPress={() => navigation.navigate("Sign Up")}>
                  | Sign Up |
                </ButtonStyled>
              </>
            ) : (
                <>
                <ButtonStyled onPress={() => navigation.navigate("Search Form")}>
                  | Search for Flight |
                </ButtonStyled>
                <ButtonStyled onPress={() => navigation.navigate("Profile")}>
                  | Update Profile |
                </ButtonStyled>
                <ButtonStyled onPress={() => dispatch(signout(navigation))}>
                  | Sign Out, {user.username} ? |
                </ButtonStyled>
              </>
            )}
          </>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
