import { ENV } from "./Env";

export const BASE_URL = ENV.API_URL;
export const AUTH_URLS = BASE_URL + "/auth";
export const LOGIN_URL = AUTH_URLS + "/login";
export const REGISTER_URL = AUTH_URLS + "/register";