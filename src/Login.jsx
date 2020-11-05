import React from "react";

const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input 
                type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                />

                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ? 
                                <span 
                                onClick={() => setHasAccount(!hasAccount)}
                                >Sign up
                                </span>
                            </p>
                        </>
                    ) : (
                        <p>
                            <button onClick={handleSignUp}>Sign up</button>
                            Have an account ? 
                            <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;