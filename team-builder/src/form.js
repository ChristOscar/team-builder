import React from 'react'

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        // b) pull the value of the input from the event object
        // c) use the `update` callback coming in through props
        const name = evt.target.name;
        const { value } = evt.target;
        // const { name, value } = evt.target;
        update(name, value);
      }
    
      const onSubmit = evt => {
        // 🔥 STEP 7 - IMPLEMENT the submit handler
        // a) don't allow the browser to reload!
        // c) use the `submit` callback coming in through props
        evt.preventDefault();
        submit();
      }
    
      return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            <label>Name
              {/* 🔥 STEP 3 - Make an input of type `text` for username.
                  Controlled inputs need `value` and `onChange` props.
                  Inputs render what they're told - their current value comes from app state.
                  At each keystroke, a change handler fires to change app state. */}
                  <input
                    name="name"
                    type="text"
                    placeholder="Type your Name"
                    maxLength="30"
                    value={values.username}
                    onChange={onChange}
                  />
            </label>
    
            <label>Email
              {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={values.email}
                    onChange={onChange}
                  />
            </label>

            
    
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            <label>Role
              {/* 🔥 STEP 5 - Make dropdown for role. */}
                  <select value={values.role} name="role" onChange={onChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Designer">Designer</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="Framework Specialist">Framework Specialist</option>
                    <option value="System Engineer">System Engineer</option>
                  </select>
            </label>
    
            <div className='submit'>
              <button>submit</button>
            </div>
          </div>
        </form>
      )

}