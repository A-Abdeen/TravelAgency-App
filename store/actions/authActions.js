import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

//--------------------USER

const setUser = (token) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch({
        type: types.SET_USER,
        payload: decode(token),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//--------------------SIGNUP

export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      console.log("Heloo");

      const res = await instance.post("/signup", newUser);
      console.log(res);

      dispatch(setUser(res.data.token));

      alert(`Welcome ${newUser.username}`);
      navigation.replace("Home");
    } catch (error) {
      console.error(error);
    }
  };
};

//--------------------SIGNIN

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);

      alert(`Welcome, ${userData.username}`);
      navigation.replace("Home");

      dispatch(setUser(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
};

//--------------------SIGNOUT

export const signout = (navigation) => {
  AsyncStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  alert(`Come back soon!`);
  navigation.replace("Home");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

//--------------------TOKEN

export const checkForToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const user = decode(token);
      const currentTime = Date.now();
      if (currentTime < user.exp) {
        dispatch(setUser(token));
      } else {
        dispatch(signout());
      }
    }
  } catch (error) {
    console.log(error);
  }
};
