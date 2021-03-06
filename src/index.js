import './index.css';
import {getUsers} from './api/userApi';
 //populate users via API call

 getUsers().then(result => {
   let usersBody = '';

   result.forEach(user => {
     usersBody+= `<tr>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
     </tr>`
   });
   global.document.getElementById('users').innerHTML = usersBody;
 })
