import React, { useState } from 'react'

const Details = () => {
  const[user, setUser] = useState({
    name: "",
    telephone: "",
    email: "",


  });
    const getUserData = (event) => {

    };
  return (
    <React.Fragment>
        <div className='text-6xl font-bold p-4 mx-4 mt-4'>
            Enter your Details
            <div className='text-3xl mt-6 pt-6 font-serif'>



              <form className='text-4xl font-light'>
                <label>Name
                  <input
                   type="text"
                   name="name"
                   placeholder="Enter your Name"
                   value={user.name}
                   onChange={getUserData}
                   autocomplete="off"required 
                  />
                </label>
              
                <label>Telephone
                <input
                   type="text"
                   name="telephone"
                   placeholder="Telephone number"
                   value={user.telephone}
                   onChange={getUserData}
                   autocomplete="off"required 
                  />

                </label>
                <label>Email
                <input
                   type="text"
                   email="email"
                   placeholder="Email address"
                   value={user.email}
                   onChange={getUserData}
                   autocomplete="off"required 
                  />
                
                </label>
              </form>
              {/* <form>
                <label>Name
                  <input type="text" />
                </label>
              </form>  */}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Details