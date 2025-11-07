let display = (users)=>{
  console.log(users.length)
  let rows=""
  for(let user of users){
    rows=rows+`<tr>
              <td>${user.id}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.address.city}</td>
              </tr>`
  }
  document.getElementById('tbody_data').innerHTML=rows
}
fetch('https://jsonplaceholder.typicode.com/rajni')
.then((resp)=>{return resp.json()})
.then((users)=>{display(users)})
.catch((err)=>{console.error(err)})