import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage("accessToken", accessToken as string);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const storeUserEmail = ({ userEmail }: { userEmail: string }) => {
  return setToLocalStorage("userEmail", userEmail as string);
};


export const getUserEmail = () => {
  const userEmailId = getFromLocalStorage("userEmail");
  if (userEmailId) {
    return userEmailId;
  } else {
    return "";
  }
};