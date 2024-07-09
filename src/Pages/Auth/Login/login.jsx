import React from 'react';
import './login.css'

function Login() {
  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div className="container">
      <div className="card login-card">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img
              alt="login"
              className="login-card-img"
              src="assets/images/login.jpg"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="brand-wrapper">
                <img
                  alt="logo"
                  className="logo"
                  src="assets/images/logo.svg"
                />
              </div>
              <p className="login-card-description">
                Sign into your account
              </p>
              <form action="#!">
                <div className="form-group">
                  <label
                    className="sr-only"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    className="sr-only"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="***********"
                    type="password"
                  />
                </div>
                <input
                  className="btn btn-block login-btn mb-4"
                  defaultValue="Login"
                  id="login"
                  name="login"
                  type="button"
                />
              </form>
              <a
                className="forgot-password-link"
                href="#!"
              >
                Forgot password?
              </a>
              <p className="login-card-footer-text">
                Don't have an account?{' '}
                <a
                  className="text-reset"
                  href="#!"
                >
                  Register here
                </a>
              </p>
              <nav className="login-card-footer-nav">
                <a href="#!">
                  Terms of use.
                </a>
                <a href="#!">
                  Privacy policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Login