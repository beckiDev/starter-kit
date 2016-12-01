import 'whatwg-fetch';

export function getUsers(){
  return get('users');
}
function get(url){
  return fetch (url).then(onSuccess, onError);
}
function onSuccess(responce){
  return responce.json();
}

function onError(){
  console.log(error); //eslint-disable-line no-console
}
