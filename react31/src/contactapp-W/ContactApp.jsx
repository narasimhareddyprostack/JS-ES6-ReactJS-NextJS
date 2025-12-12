import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
const ContactApp = () => {
  let [contacts,setContacts]=useState([]);
  let [contact,setContact]  = useState({});
  let userSelectedContact=(contact)=>{
    setContact(contact)
  }
  useEffect(()=>{
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((resp)=>{setContacts(resp.data)})
    .catch((err)=>{console.log(err)})
  },[])
  return <div className='container'>
          <div className="row">
            <div className="col-8">
            {
              contacts.length>0 ?
              <> <ContactList  contacts={contacts} selectedContact={userSelectedContact} /></>:
              <><h3>No Data</h3></>
            }
             
            </div>
            <div className="col-4">
            {
              Object.keys(contact).length>0?
              <><ContactDetails contact={contact}/></>:
              <><h3>No Data</h3></>
            }
              
            </div>
          </div>
          </div>
}

export default ContactApp