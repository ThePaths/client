export const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const MAIN_HEADER_URL = process.env.NODE_ENV === 'production' ? 'https://the-paths-client.herokuapp.com/' : 'http://localhost:3000/';

export const AUTH_HEADER_URL = process.env.NODE_ENV === 'production' ? 'https://the-paths-client.herokuapp.com/auth' : 'http://localhost:3000/auth';