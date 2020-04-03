// import { User } from './models/User';

// const user = new User({ name: 'myName', age: 20 });

// user.on('change', () => {
//   console.log('Change #1');
// });
// user.on('change', () => {
//   console.log('Change #2');
// });

// console.log(user);

import axios from 'axios';

axios.post('http://localhost:3000/users', {
  name: 'myname',
  age: 20,
});

axios.get('http://localhost:3000/users/1');
