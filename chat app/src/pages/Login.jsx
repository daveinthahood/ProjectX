import React from "react";

const Login = () => {
    return (
        <div className="formContainer"> 
            <div className="formWrapper">
                <span className="logo"> Welcome in Project X</span>
                <span className="title"> Register </span>
                <form>
                    
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    
                    <button> Sign In </button>
                </form>
                <p> Non hai un account? Registrati!</p>
            </div>
        </div>
    )
}

export default Login