import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from 'react-native-datepicker';

// Styling
import { Form, Item, Picker} from "native-base";
import { AuthButton, AuthButtonText, AuthContainer} from "./styles";
import { bookingFlight } from "../../store/actions/flightActions";
import { AuthTextInput, AuthTitle } from "../authentication/styles";

const ContactForm = ({ navigation }) => {
    const dispatch = useDispatch();

    const [passenger, setPassenger] = useState({
        title: "",
        firstName: "",
        lastName: "",
        gender: "",
        passportNum: "",
        countryIssue: "",
        expiryDate: "",
      });

  const handleSubmit = () => {
    dispatch(bookingFlight(passenger));
    navigation.navigate("bookingCreate");
    };
    
  return (
    <AuthContainer>
            <AuthTitle>Passenger Info</AuthTitle>
          <Form>
          <Item>
      <Picker
          selectedValue={passenger.title}
          mode="dropdown"
          placeholder="Title"
          style={{ width: 300 , height: 60 }}
          onValueChange={(itemValue) => setPassenger({ ...passenger, itemValue })}
          >
          <Picker.Item label="Mr." value="Mr" />
          <Picker.Item label="Ms." value="Mr" />
          <Picker.Item label="Mrs." value="Mrs" />
      </Picker>
        </Item>

              <Item>
                <AuthTextInput
                  placeholder="First Name"
                  />
                </Item>
                <Item>
                   <AuthTextInput
                  placeholder="Last Name"
                />
              </Item>
              <Item>
      <Picker
          selectedValue={passenger.gender}
          mode="dropdown"
          placeholder="Title"
          style={{ width: 300 , height: 60 }}
          onValueChange={(itemValue) => setPassenger({ ...passenger, itemValue })}
          >
          <Picker.Item label="Male" value="gender" />
          <Picker.Item label="Female" value="gender" />
      </Picker>
              </Item>
              <Item>
                <AuthTextInput
                  placeholder="Nationality"
                  />
              </Item>
              <Item>
                <AuthTextInput
                  placeholder="Passport No."
                />
              </Item>
              <Item>
                <AuthTextInput
                  placeholder="Country Issue"
                  />
              </Item>
    <Item>
    <DatePicker
        style={{width: 285}}
        date={passenger.expiryDate}
        mode="date"
        placeholder="Expiry Date"
        format="YYYY-MM-DD"
        minDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={(expiryDate) => setPassenger({...passenger, expiryDate})}
          />
          </Item>     
            </Form>

            <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Confirm</AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default ContactForm;