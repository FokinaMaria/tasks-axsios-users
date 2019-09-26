import Axios from 'axios';

const getUsers = queryParams => Axios.get('/users', { params: queryParams } );

export { getUsers };
