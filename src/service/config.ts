let BASE_URL = '';

if (import.meta.env.DEV) {
  BASE_URL = 'http://127.0.0.1:3333/api';
} else {
  BASE_URL = 'https://106.14.121.85/api';
}

export default BASE_URL;
