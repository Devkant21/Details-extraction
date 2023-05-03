import React from 'react'

const Details = () => {
  return (
    <React.Fragment>
        <div className='text-6xl font-bold p-4 mx-4 mt-4'>
            Enter your Details
            <div className='text-3xl mt-6 pt-6 font-serif'>
              <form>
                <label>Name
                  <input type="text" />
                </label>
              </form>
              <form>
                <label>Telephone
                  <input type="text" />
                </label>
              </form>
              <form>
                <label>Name
                  <input type="text" />
                </label>
              </form> 
            </div>
        </div>
    </React.Fragment>
  )
}

export default Details