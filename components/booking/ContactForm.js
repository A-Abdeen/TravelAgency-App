import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Styling
import { Form, Item } from "native-base";
import { AuthButton, AuthButtonText, AuthContainer } from "./styles";
import { bookingFlight } from "../../store/actions/flightActions";
import { AuthTextInput, AuthTitle } from "../authentication/styles";

const ContactForm = ({ navigation }) => {
  const dispatch = useDispatch();

  const [booking, setBooking] = useState({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
  });

  const handleSubmit = () => {
    dispatch(bookingFlight(booking));
    navigation.navigate("bookingCreate");
  };
  return (
    <AuthContainer>
      <AuthTitle>Contact Info</AuthTitle>
      <Form>
        <Item>
          <AuthTextInput placeholder="Full Name" />
        </Item>
        <Item>
          <AuthTextInput
            placeholder="email"
            onChangeText={(email) => setBooking({ ...booking, email })}
          />
        </Item>
        <Item>
          <AuthTextInput placeholder="Phone No.(+973-39999999)" />
        </Item>
      </Form>

      <AuthButton onPress={() => navigation.navigate("Home")}>
        <AuthButtonText> Book </AuthButtonText>
      </AuthButton>
    </AuthContainer>
  );
};

export default ContactForm;
