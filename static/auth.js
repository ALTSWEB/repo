const fetch = require('node-fetch');
const url = 'https://app-url.cyclic.app';
const username = 'Jamal';
const password = 'Taquavion';

const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');

const headers = {
  'Authorization': `Basic ${encodedCredentials}`,
  'Content-Type': 'application/json'
};

const body = JSON.stringify({
  const username = 'Jamal';
  const password = 'Taquavion';
});

const requestOptions = {
  method: 'POST',
  headers: headers,
  body: body,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
