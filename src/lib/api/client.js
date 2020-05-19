import axios from 'axios';

const client = axios.create({
    baseURL: 'database-1.ceslpjyydyne.ap-northeast-2.rds.amazonaws.com'
});

client.defaults.baseURL = 'http://54.180.115.91:8000/';

export const setToken = token => {
  client.defaults.headers.common['Authorization'] = token;
};

/**
 * 프로덕션인경우 외부 도메인으로 요청
 */
if (process.env.NODE_ENV === 'production') {
    client.defaults.baseURL = 'http://54.180.115.91:8000/';
} else {
    client.defaults.baseURL = 'http://54.180.115.91:8000/';
}

export default client;
