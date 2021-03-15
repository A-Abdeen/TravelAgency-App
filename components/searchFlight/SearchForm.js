import React, { useState } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import { Text, View, Button, Picker, Right, Left } from "native-base";
import DatePicker from 'react-native-datepicker';
import NumericInput from 'react-native-numeric-input'
import { useDispatch, useSelector } from "react-redux";
import DropDownPicker from 'react-native-dropdown-picker';

//Styling
import { AuthButton, AuthButtonText, AuthContainer, AuthTextInput, FlightIconStyled} from './styles';

const SearchForm = ({navigation}) => {
  const [flight, setFlight] = useState({
    originId: "",
    destinationId: "",
    departureDate: "",
    arrivalDate: "",
    departureTime: "",
    arrivalTime: "",
    class :"",
    seats: 0,
  });

  const destination = useSelector(
    (state) => state.locationReducer.destinations
  );
  const destinationList = destination.map((destination) => (
    <option value={`${destination.id}`}>{destination.airportName}</option>
  ));

  return (
    <AuthContainer>
      <Text>
      <FlightIconStyled type="MaterialIcons" name="flight-takeoff" size={10}/> 
        Find Your Perfect Trip</Text>
        <ToggleSwitch
                isOn={true}
                onColor="green"
                offColor="red"
                label="Round Trip"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="small"
                onToggle={isOn => console.log("changed to : ", isOn)}
      />

<DatePicker
        style={{width: 200}}
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
      <DatePicker
        style={{width: 200}}
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
            marginLeft: 0
          },
          dateInput: {
            marginLeft:36
          }
        }}
        onDateChange={( arrivalDate) => setFlight({...flight, arrivalDate})}
      />

{/* <DropDownPicker
    items= {[{label: 'USA', value: 'usa'}, {label: 'USA', value: 'usa'}]}
    defaultValue="location"
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem= {(originId) => setFlight({...flight, originId})}
/> */}
       <Left>
      <Picker
        selectedValue={flight.class}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setFlight(itemValue)}
      >
        <Picker.Item label="Economy Class" value="economy" />
        <Picker.Item label="Business Class" value="business" />
        </Picker>
        </Left>

      <Right>
      <NumericInput 
         rounded
         totalHeight={30}
         totalWidth={60}
         rightButtonBackgroundColor='#e74c3c' 
         leftButtonBackgroundColor='#f1f6ff'
         onChange={flight.seats}
        />
        </Right>

      <AuthButton onPress={() => navigation.navigate("")}>
        <AuthButtonText>Search for Flight</AuthButtonText>
      </AuthButton>
      
      </AuthContainer>
  );
};

export default SearchForm;
