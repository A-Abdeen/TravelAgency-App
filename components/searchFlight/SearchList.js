import React from "react";
import { List } from "native-base";
import SearchItem from "./SearchItem";
import { useSelector } from "react-redux";


const SearchList = ({ flights, navigation }) => {
const foundFlights = useSelector((state) => state.flightReducer.foundFlights);

const searchList = flights.map((flight) => (
    <SearchItem navigation={navigation} flight={flight} key={flight.id} />
  ));
  return (
  <List>{searchList}</List>
  )
};

export default SearchList;