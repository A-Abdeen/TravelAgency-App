import React from "react";

// Styling
import { HomeBackground, OverLayContainer, Title, TopStyling } from "./styles";

const Home = () => {
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
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
