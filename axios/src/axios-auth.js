import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://axios-ea62f.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
