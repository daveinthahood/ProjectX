import React from "react";

const Register = () => {
    return (
        <div className="formContainer"> 
            <div className="formWrapper">
                <span className="logo"> Welcome in Project X</span>
                <span className="title"> Register </span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="file" />
                    <button> Sign Up</button>
                </form>
                <p> Hai un account? Fai il Login!</p>
            </div>
        </div>
    )
}

export default Register