import axios from 'axios';

export function clientApiRegister({payload}) {
  return axios.post('/api/users/register_account', payload);
}