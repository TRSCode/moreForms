import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    // const [testUser, setTestUser] = userState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // })

    const [allUsers, setAllUsers] = useState([]);

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setAllUsers([...allUsers,user])
        setUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

    }


    return (
        <div>
            <div className="row mx-auto mt-3 bg-primary col-4 rounded-3">
                <form action="" className="col-md-6 mx-auto" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control mt-1" name="firstName" id="firstName" onChange={changeHandler} placeholder="First Name" value={user.firstName}/>
                    </div>
                    {user.firstName.length < 2 && user.firstName ? <p>First Name must be at least 2 characters!</p>: null}
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control mt-1" name="lastName" id="lastName" onChange={changeHandler} placeholder="Last Name" value={user.lastName}/>
                    </div>
                    {user.lastName.length < 2 && user.lastName ? <p>Last Name must be at least 2 characters!</p>: null}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control mt-1" name="email" id="email" onChange={changeHandler} placeholder="Email" value={user.email}/>
                    </div>
                    {user.email.length < 5 && user.email.length >0 ? <p>Email must be at least 5 characters!</p>: null}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control mt-1" name="password" id="password" onChange={changeHandler} placeholder="Password" value={user.password}/>
                    </div>
                    {user.password.length < 8 && user.password.length >0 ? <p>Password must be at least 8 characters!</p>: null}
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control mt-1" name="confirmPassword" id="password" onChange={changeHandler} placeholder="Confirm Password" value={user.confirmPassword}/>
                    </div>
                    {user.confirmPassword !== user.password ? <p>Passwords don't match!</p>: null}
                    {/* <button className="btn-primary mt-3" onClick={handleClick}>Submit</button> */}
                    {/* <button className="btn btn-secondary m-3" onClick={() => alert("This button has been clicked!")}>Submit</button> */}
                    <button className="btn btn-secondary m-3">Submit</button>
                </form>
            </div>
            <div className="row mx-auto mt-3 bg-primary col-4 rounded-3">
                    <h3>First Name: {user.firstName}</h3>
                    <h3>Last Name: {user.lastName}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Password: {user.password}</h3>
                    <h3>Confirm Password: {user.confirmPassword}</h3>
            </div>


        </div>
    )
}

export default Form
