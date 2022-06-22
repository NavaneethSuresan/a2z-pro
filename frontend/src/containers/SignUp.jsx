import React from 'react';

function SignUp() {
    return (
        <>
            <div class="wrap">
                <div class="login-form">
                    <div class="form-header">
                        <h3>
                            Create account and <br /> discover the benfits{' '}
                        </h3>
                    </div>
                    <h2 class="closebtn">X</h2>
                    {/* <!--User Name--> */}
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder="User Name" />
                    </div>
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
                        <button class="form-button" type="submit">
                            Sign up
                        </button>
                    </div>
                    <div class="form-footer">
                        Already a member yet?
                        <a href="/signin">Sign up</a>
                    </div>
                </div>
            </div>
            {/* <!--/.wrap--> */}
        </>
    );
}

export default SignUp;
