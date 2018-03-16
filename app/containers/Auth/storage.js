// @flow
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const TOKEN = 'token';
const USER = 'user';

export function setToken(token: string) {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(USER, JSON.stringify(jwtDecode(token)));

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unsetToken() {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER);

  delete axios.defaults.headers.common.Authorization;
}

export function getToken(): ?string {
  return localStorage.getItem(TOKEN);
}

export function getUser(): ?Object {
  const data = localStorage.getItem(USER);
  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function getRoles(): Array<string> {
  const user = getUser();
  if (user) {
    return user.roles;
  }

  return [];
}
