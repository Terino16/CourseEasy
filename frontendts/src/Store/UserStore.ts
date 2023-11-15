// userstore.ts
import { atom } from 'recoil';
import Cookies from 'js-cookie';
// Initialize authState based on any existing authentication token or user data
const initialAuthState = Cookies.get("name");/* logic to get initial user data from cookies, localStorage, etc. */

export const authState = atom({
  key: 'user',
  default: initialAuthState,
});