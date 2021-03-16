import React, { useState } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { Form,Text, View, Button, Picker, Right, Left ,Content, Item, Body} from "native-base";
import DatePicker from 'react-native-datepicker';
import NumericInput from 'react-native-numeric-input'
import { useDispatch, useSelector } from "react-redux";
import DropDownPicker from 'react-native-dropdown-picker';

//Styling
import { AuthButton, AuthButtonText, AuthContainer, AuthTextInput, FlightIconStyled, AuthOther, AuthTitle} from './styles';

const SearchForm = ({ navigation }) => {
  const [roundtrip, setRoundtrip] = useState(false);
  const [flight, setFlight] = useState(
    roundtrip
    ? {
    originId:"",
    destinationId: "",
    departureDate: "",
    arrivalDate: "",
    class :"",
    seats: 0,
  }
  : {

  originId:"",
  destinationId: "",
  departureDate: "",
  class :"",
  seats: 0,

}
);

  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );
  const destinationList = destination.map((destination) => (
    <option value={`${destination.id}`}>{destination.airportName}</option>
  ));

  return (
    <AuthContainer>
      <AuthTitle>
      <FlightIconStyled type="MaterialIcons" name="flight-takeoff" size={10}/> 
        Find Your Perfect Trip</AuthTitle>
      
      <Form>
        <Content>
          <Item>
            <Button danger title="One-way" onPress={() => setRoundtrip(false)} >
              <Text>One way</Text>
            </Button>
            <Button light title="Round Trip" onPress={() => setRoundtrip(true)} >
              <Text>Round Trip</Text>
            </Button>
          </Item>
          
          <AuthOther>From:</AuthOther>
          <Item>
      <Picker
          selectedValue={flight.originId}
          mode="dropdown"
          placeholder=" Choose an airport"
          style={{ width: 300 , height: 60 }}
          onValueChange={(location) => setFlight({ ...flight, location })}
            >
              
              {/* {destinationList.map((destination) => ( */}
                <Picker.Item label="destinationId" value="destination" key="destination" />
              

      </Picker>
          </Item>


      <AuthOther>To:</AuthOther>
      <Item>
      <Picker
          selectedValue={flight.destinationId}
          mode="dropdown"
          placeholder=" Choose an airport"
          style={{ width: 300 , height: 60 }}
          onValueChange={(location) => setFlight({ ...flight, location })}
            >
              
              {/* {destinationList.map((destination) => ( */}
                <Picker.Item label="destinationId" value="destination" key="destination" />
      </Picker>
      </Item>
        
<DatePicker
        style={{width: 250}}
        date={flight.departureDate}
        mode="date"
        placeholder="Departure Date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft:36
          }
        }}
        onDateChange={( departureDate) => setFlight({...flight, departureDate})}
          />
          
          {roundtrip ??
            <DatePicker
              style={{ width: 250 }}
              date={flight.arrivalDate}
              mode="date"
              placeholder="Arrival Date"
              format="YYYY-MM-DD"
              minDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                },
                dateInput: {
                  marginLeft: 36,
                  padding: 10
                },
              }}
              onDateChange={(arrivalDate) => setFlight({ ...flight, arrivalDate })}
            />
          }

       <Item>
      <Picker
          selectedValue={flight.class}
          mode="dropdown"
          placeholder=" Choose a class"
          style={{ width: 300 , height: 60 }}
          onValueChange={(itemValue) => setFlight({ ...flight, itemValue })}
          >
          
          <Picker.Item label="Economy Class" value="economy" />
          <Picker.Item label="Business Class" value="business" />

      </Picker>
      </Item>
      
          <AuthOther>Number of Passengers</AuthOther>
     
      <NumericInput 
         rounded
         totalHeight={35}
         totalWidth={60}
         rightButtonBackgroundColor='#e74c3c' 
         leftButtonBackgroundColor='#f1f6ff'
         onChange={flight.seats}
            />
        

      <AuthButton onPress={() => navigation.navigate("")}>
        <AuthButtonText>Search for Flight</AuthButtonText>
          </AuthButton>
          </Content>
      </Form>
      </AuthContainer>
  );
};

export default SearchForm;
