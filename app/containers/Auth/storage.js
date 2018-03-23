// @flow
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const TOKEN = 'token';
const USER = 'user';
const ROLES = 'roles';

export function setToken(token: string) {
  localStorage.setItem(TOKEN, token);

  const tokenPayload = jwtDecode(token);
  localStorage.setItem(ROLES, JSON.stringify(tokenPayload.roles));

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unsetToken() {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER);
  localStorage.removeItem(ROLES);

  delete axios.defaults.headers.common.Authorization;
}

export function getToken(): ?string {
  return localStorage.getItem(TOKEN);
}

export function setUser(user: Object) {
  localStorage.setItem(USER, JSON.stringify(user));
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
