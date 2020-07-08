function getAllClients() {
 const myHeaders = new Headers();

 /*
   myHeaders.append('Content-Type', 'application/json');
   since it's a get request you don't need to specify your content-type
 */

 myHeaders.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiIwYTI5NTRhYS0wOWVmLTRjMjEtYTBmYy1kZDQ4NDMwNzViMjQiLCJpYXQiOjE1OTM4MTY2Mzh9.tdKyy-1nYbOE6jwqhIio0KzqQUVYyi_JbEX3OdNfwhg');

 return fetch('http://159.65.9.196/api/plans', {
   method: 'GET',
   mode: 'no-cors',
   headers: myHeaders,
 })
   .then(response => response.json())
   .then((user) => {
     console.log(user.name);
     console.log(user.location);
   })
   .catch((error) => {
     console.error(error);
   });
}

getAllClients();
