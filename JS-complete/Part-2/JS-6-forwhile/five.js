let users=[
    {uid:1,uname:"Rahul",gender:'Male'},
    {uid:2,uname:"Sonia",gender:'Female'},
    {uid:3,uname:"Priyanka",gender:'Female'},
    {uid:4,uname:"Modi",gender:'Male'},
    {uid:5,uname:"Amith",gender:'Male'},
    {uid:6,uname:"Salman",gender:'Male'},
]
let no_male_users=0;
for(let i=0;i<=users.length-1;i++){
        if(users[i].gender==="Male"){
            no_male_users=no_male_users+1;
        }
}
console.log("No of Male Users",no_male_users)