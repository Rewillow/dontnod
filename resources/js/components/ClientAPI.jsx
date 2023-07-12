import axios from 'axios';

const ClientAPI = {
  login: async (email, password) => {
    return axios
      .post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password
      })
      .then(response => {
        return response.data;
      })
  },
  
  signUp: async (name, email, password) => {
    return axios
      .post('http://127.0.0.1:8000/api/register', {
        name: name,
        email: email,
        password: password
      })
      .then(response => {
        return response.data;
      })
  },

  user: async () => {
    return axios.get('http://127.0.0.1:8000/api/user') 
    .then(response => {
      return response.data;
    })
  },

  logout: async () => {
    return axios.post('http://127.0.0.1:8000/api/logout')
    .then(response => {
      return response.data
    })
  }
};

export default ClientAPI;
