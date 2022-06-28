// import axios from 'axios';
// import constants from './constants';
// import utils from '../utils';

// const instance = axios.create({
//   baseURL: constants.BASE_URL,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// instance.interceptors.request.use(async (req: any) => {
//   const token = await utils.getValueFor('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//     return req;
//   }
//   return req;
// });

// export default instance;