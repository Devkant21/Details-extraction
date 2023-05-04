import React, { useState } from 'react'

const Details = () => {
  const [user, setUser] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  let name, value;
    const getUserData = (event) => {
      name = event.target.name;
      value = event.target.value;

      setUser({ ...user, [name]: value });
    };

    const postData = async(e) => {
      e.preventDefault();

        const {
          name,
          telephone,
          email,
        } = user;

      const res = await fetch("https://details-extraction-default-rtdb.firebaseio.com/userData.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          telephone,
          email,
        }),
      }
    );
  };
  return (
    <React.Fragment>
        <div className='text-6xl font-bold p-4 mx-4 mt-4'>
            Enter your Details
            <div className='text-3xl mt-6 pt-6 font-serif'>
              <form className='text-4xl font-light' method="POST">
                <span className='text-8xl justify-between'>Name
                  <input
                   type="text"
                   name="name"
                   placeholder="Enter your Name"
                   value={user.name}
                   onChange={getUserData}
                   autocomplete="off"
                   required 
                  />
                </span>
              
                <span className="text-4xl">Telephone
                <input
                   type="text"
                   name="telephone"
                   placeholder="Telephone number"
                   value={user.telephone}
                   onChange={getUserData}
                   autocomplete="off"
                   required 
                />
                </span>
                <span className="text-4xl">Email
                <input
                   type="text"
                   email="email"
                   placeholder="Email address"
                   value={user.email}
                   onChange={getUserData}
                   autocomplete="off"
                   required 
                />
                
                </span>
                <div className='p-4 rounded-md bg-blend-color outline-teal-900 hover
                blue'>
                  <button onClick={postData}>
                    <span>
                      Submit
                    </span>

                  </button>
                </div>
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