let users=[
    {uid:1,uname:"Rahul",gender:'Male'},
    {uid:2,uname:"Sonia",gender:'Female'},
    {uid:3,uname:"Priyanka",gender:'Female'},
    {uid:4,uname:"Modi",gender:'Male'},
    {uid:5,uname:"Amith",gender:'Male'},
    {uid:6,uname:"Salman",gender:'Male'},
]
//print all female users
for(let user of users){
    if(user.gender==="Female"){
        console.log(user.uname)
    }
}