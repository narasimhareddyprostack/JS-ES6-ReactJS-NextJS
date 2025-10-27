let employees = [
  {"id":1,"first_name":"Greg","last_name":"LinJeannel","email":"glindeboom0@dell.com","gender":"Male","ip_address":"55.15.203.99"},
  {"id":2,"first_name":"Vonnie","last_name":"Jeannel","email":"vjeannel1@walmart.com","gender":"Female","ip_address":"214.85.211.75"},
  {"id":3,"first_name":"Dionne","last_name":"Ashworth","email":"dashworth2@newsvine.com","gender":"Female","ip_address":"249.63.30.179"},
  {"id":4,"first_name":"Zane","last_name":"Izat","email":"zizat3@dagondesign.com","gender":"Male","ip_address":"176.201.29.148"},
  {"id":5,"first_name":"Esme","last_name":"Darko","email":"edarko4@sciencedaily.com","gender":"Male","ip_address":"30.209.179.10"}
];

let malecount = 0;
let femalecount = 0;

for (let emp of employees) {
  if (emp.gender === "Male") malecount++;
  if (emp.gender === "Female") femalecount++;
}

console.log("Male:", malecount);
console.log("Female:", femalecount);