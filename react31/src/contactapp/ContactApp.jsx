import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
const ContactApp = () => {
  let [contacts,setContacts]=useState([])
  useEffect(()=>{
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((resp)=>{setContacts(resp.data)})
    .catch((err)=>{console.log(err)})
  },[])
  return <div className='container'>
          <div className="row">
          <h3>Contact App Component</h3>
          <pre>{JSON.stringify(contacts)}</pre>
            <div className="col-8">
              <ContactList  one={"one"} contacts={contacts}/>
            </div>
            <div className="col-4">
            <ContactDetails/>
            </div>
          </div>
          </div>
}

export default ContactApp