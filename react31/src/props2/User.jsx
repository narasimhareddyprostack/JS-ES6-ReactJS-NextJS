import Employee from "./Employee";
let User =()=>{
let users=[
    {uid:101,uname:"Rahul",loc:"Wayand"},
    {uid:102,uname:"Sonia",loc:"ND"},
    {uid:103,uname:"Priya",loc:"ND"},
    {uid:104,uname:"ModiRahul",loc:"Bangalore"},
]

    return <div>
                <h4>User Component</h4>
                <hr/>
                <Employee employees={users}/>
            </div>
}
export default User;