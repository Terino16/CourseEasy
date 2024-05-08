// userstore.ts
import { atom } from 'recoil';
import Cookies from 'js-cookie';

const initialAuthState = Cookies.get("id");/* logic to get initial user data from cookies, localStorage, etc. */

export const authState = atom({
  key: 'user',
  default: initialAuthState,
});