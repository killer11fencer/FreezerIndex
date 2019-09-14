import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: false
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1 class='company'>FREEZER INDEX</h1>
          <img class='logo' src='https://www.pnglot.com/pngfile/detail/2-25403_mobile-logo-clip-art.png' alt='logo'/>
        </header>
          <img class='background' alt='labratory'src='https://odh.ohio.gov/wps/wcm/connect/gov/ad6ed57e-0046-4dc4-bbaa-1e77f945b317/GettyImages-842452752_1280x480.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_M1HGGIK0N0JO00QO9DDDDM3000-ad6ed57e-0046-4dc4-bbaa-1e77f945b317-msjumU1'/>
            <div class='loginbox'>
              <h1>Login</h1>
              <h3>Email</h3>
              <input />
              <h3>Password</h3>
              <input />
              <button>Login</button>
              <h5>Forgot Password? <a href="https://www.w3schools.com">Click Here</a> </h5>
            </div>

            <footer>
              <div>
                <h6>Contact Info</h6>
              </div>
            </footer>
      </div>
          )
        }
      }
      
export default Login