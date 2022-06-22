import React from 'react';

function Signin() {
    return (
        <>
            <div class="wrap">
                <div class="login-form">
                    <div class="form-header">
                        <h3>LOG IN</h3>
                    </div>
                    <h2 class="closebtn">X</h2>
                    {/* <!--Email Input--> */}
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder="E-mail" />
                    </div>
                    {/* <!--Password Input--> */}
                    <div class="form-group">
                        <input type="password" class="form-input" placeholder="Password" />
                    </div>
                    {/* <!--Login Button--> */}
                    <div class="form-group">
                        <button class="form-button">Login</button>
                    </div>
                    <div class="form-footer">
                        Not a member yet?
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
            {/* <!--/.wrap--> */}
        </>
    );
}

export default Signin;
