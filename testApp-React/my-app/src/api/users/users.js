import axios from '../service';

const users = {
  get: (action) => axios.get(action)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err);
    }),
  post: (params) => axios.post('/users', params)
  	.then(({ data }) => data)
  	.catch((err) => {
      throw new Error(err);
    }),
};

export { users };
