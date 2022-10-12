import axios from 'axios';

axios.defaults.baseURL = 'http://test-blog-api.ficuslife.com/api/v1';

const authToken = {
    set: token =>
        (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`),
    unset: () => (axios.defaults.headers.common['Authorization'] = ''),
};

export { axios, authToken };
