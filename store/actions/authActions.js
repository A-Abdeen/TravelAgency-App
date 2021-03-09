import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
export const signup = (newUser, navigation) => {
  return async (dispatch) => {
    try {
      console.log("Heloo");

      const res = await instance.post("signup", newUser);
      if (res) {
        console.log(
          "🚀 ~ file: authActions.js ~ line 27 ~ return ~ res.data.token",
          res.data.token
        );
        dispatch(setUser(res.data.token));
        alert(`Welcome ${newUser.username}`);
        navigation.replace("Home");
      }
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("signin", userData);
      if (res) {
        console.log(
          "🚀 ~ file: authActions.js ~ line 45 ~ return ~ userData",
          userData
        );
        console.log(
          "🚀 ~ file: authActions.js ~ line 43 ~ return ~ res.data.token",
          res.data.token
        );
        alert(`Welcome ${userData.username}`);
        navigation.replace("CartList");
      }
      dispatch(setUser(res.data.token));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  AsyncStorage.removeItem("myToken");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem("myToken");
    console.log("saved token", token);
    if (token) {
      console.log(token);
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
