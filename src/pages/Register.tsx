import {SyntheticEvent, useState} from 'react'
import {Redirect} from 'react-router-dom'

const Register = () => {

    /** setting up states that we will use to track input values*/
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /** a state used to track if we are gonna redirect to another page*/
    const [redirect, setRedirect] = useState(false);


    /** method to be used for submitting form*/
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            name,
            email,
            password
        }

        //the options used for fetch
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'appication/json'})
          }

        //redirecting if registration is successful
        setRedirect(true)
        
        if(redirect){
            return <Redirect to ="/login"/>
        }
    }

    return (
        <main className="form-signin">
          <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal text-center">Please Sign-up</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
              onChange = {e => setName(e.target.value)}/>
              <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating">
              <input type="name" className="form-control" id="floatingName" placeholder="name@example.com"
              onChange = {e => setEmail(e.target.value)}/>
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
              onChange = {e => setPassword(e.target.value)}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
            <p  className="mt-3">Don't have an account? Register now.</p>
          </form>
      </main>
    )
}

export default Register