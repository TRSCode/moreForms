import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <div className="row mx-auto mt-3 bg-primary col-4 rounded-3">
                <form action="" className="col-md-6 mx-auto">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control mt-1" name="firstName" id="firstName" onChange={changeHandler} placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control mt-1" name="lastName" id="lastName" onChange={changeHandler} placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control mt-1" name="email" id="email" onChange={changeHandler} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control mt-1" name="password" id="password" onChange={changeHandler} placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control mt-1" name="confirmPassword" id="password" onChange={changeHandler} placeholder="Confirm Password"/>
                    </div>
                    {/* <button className="btn-primary mt-3" onClick={handleClick}>Submit</button> */}
                    <button className="btn btn-secondary m-3" onClick={() => alert("This button has been clicked!")}>Submit</button>
                </form>
            </div>


        </div>
    )
}

export default Form
