import axios from 'axios';

export default axios.create({
  baseURL: 'https://65494daedd8ebcd4ab24764b.mockapi.io/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});
