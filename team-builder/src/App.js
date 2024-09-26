import './App.css';
import React, { useState } from 'react';
import TeamForm from './form';
import Team from './team';


const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}


export default function App() {
  const [tMembers, setTMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  
  
  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  
  
  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    //  b) prevent further action if either username or email or role is empty string after trimming
    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API
    //  d) also on success clear the form
    const newMembers = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTMembers(tMembers.concat(newMembers))
    
  }

  
  
  return (
    <div className="Team Member Form">
      <h1>Team Member Form </h1>
      <TeamForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

{
        tMembers.map((member, idx) => {
          return (
            <Team key={idx} details={member} />
          )
        })
      }
    </div>
  );
  
}
