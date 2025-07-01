function LoginCard(){
    return (
     <div className="login-form">
        <h1>LOGIN</h1>
        <div className="login-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" name="Email" id="Email" />
        </div>
        <div className="login-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="pasword" />
        </div>
        <div className="login-group">
            <label>Forgot Password?</label>
        </div>
        <div className="login-group">
                <button type="submit" onClick={SubmitEvent}>Submit</button>
        </div>
     </div>
    );
 
 }
 
 export default LoginCard