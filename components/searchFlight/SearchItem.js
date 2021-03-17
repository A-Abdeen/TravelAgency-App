import React from "react";
import { ListItem, Button, Text, Icon, Card } from "native-base";

const SearchItem = ({ navigation, flight }) => { 

  return (
    <ListItem >
    <Card>
  <Card.Title>{flight.airline.name}</Card.Title>
  <Card.Divider/>
              <Text style={{ marginBottom: 10 }}>From:{flight.originId}</Text>
              <Text style={{ marginBottom: 10 }}>To: {flight.destinationId}</Text>
              <Text style={{ marginBottom: 10 }}>Departure Date:{flight.departureDate}, {flight.departureTime}</Text>
              <Text style={{ marginBottom: 10 }}>ArrivalDate:{flight.arrivalDate}, {flight.arrivalTime}</Text>
              <Text style={{ marginBottom: 10 }}>
                  Price:BHD {flight.class === "economySeats" ? (flight.economyPrice) :
                      (flight.businessPrice)}</Text>
              


    <Button onPress={() => navigation.navigate("Home")}
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='Book' />
    </Card>
          
    </ListItem>
  );
};

export default SearchItem;