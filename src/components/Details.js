import React, { useState } from 'react'

const Details = () => {
  const [user, setUser] = useState({
    name: "",
    telephone: "",
    email: "",
    day: "",
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
          day,
        } = user;

        if (name && telephone && email && day) {
          const res = await fetch("https://details-extraction-default-rtdb.firebaseio.com/userData.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          telephone,
          email,
          day,
        }),
      }
    ); if (res) {
      setUser({
        name: "",
        telephone : "",
        email : "",
        day : "",
      });
      alert("Data stored successfully ");
    }
        }
          else {
            alert("Please fill all the datas");
          } 
  };
  return (
    <React.Fragment>
        <div className='text-6xl font-bold p-4 mx-4 mt-4'>
            Extraction : And here I collect your datas
            <div className='text-3xl mt-6 pt-6 font-serif'>
              <form className='text-4xl font-light' method="POST">
                <span className='text-4xl justify-between border-spacing-4'>Name
                    
                  <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe'
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={user.name}
                    onChange={getUserData}
                    autocomplete="off"
                    required 
                  />
                </span>
              
                <span className="text-4xl mt-10">Telephone
                  <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="00000 00000'
                    type="text"
                    name="telephone"
                    placeholder="Telephone number"
                    value={user.telephone}
                    onChange={getUserData}
                    autocomplete="off"
                    required 
                  />
                </span>

                <span className="text-4xl mt-4">Email
                  <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
                    type="text"
                    name="email"
                    placeholder="Email address"
                    value={user.email}
                    onChange={getUserData}
                    autocomplete="off"
                    required 
                  />
                </span>
                <span className="text-4xl mt-4">How was your day today?
                  <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
                    type="text"
                    name="day"
                    placeholder="awesome"
                    value={user.day}
                    onChange={getUserData}
                    autocomplete="off"
                    required 
                  />
                </span>
                <div className='p-4 rounded-md bg-blend-color outline-teal-900 hover
                blue'>
                  <button className='shadow bg-gradient-to-r from-indigo-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-gray-100 font-bold py-2 px-4 rounded" type="button"' onClick={postData}>
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