/* eslint-disable no-unused-vars */
export const saveToken = (id, token) => {
  localStorage.setItem("user", JSON.stringify({ Id: id, Token: token }));
};

export const getToken = () => {
  var currentUser = JSON.parse(localStorage.getItem("user"));
  if (currentUser) {
    return currentUser.Token;
  } else {
    return null;
  }
};

export const isToken = () => {
  return getToken() != null;
};
export const getId = () => {
  if (isToken()) {
    return JSON.parse(localStorage.getItem("user")).Id;
  } else {
    return null;
  }
};

export const clearToken = () => {
  return localStorage.removeItem("user");
};
