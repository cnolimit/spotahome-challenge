import axios from 'axios';

const spotahomeApi = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export const apiGetHomeCards = () => spotahomeApi.get('/homecards')