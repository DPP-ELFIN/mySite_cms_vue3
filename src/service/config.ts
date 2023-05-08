let BASE_URL = '';

if (import.meta.env.DEV) {
  BASE_URL = 'http://loaclhost:3000';
} else {
  BASE_URL = 'https://106.14.121.85';
}

export default BASE_URL;
