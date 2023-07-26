import React from 'react'
import "./navBar.css"

function Navbar() {
  return (
    <div>
        <div className="navbarContainer">
            <div className="logoDiv"> <img src="./Images/dropbox-svgrepo-com.svg" alt=""/> </div>
            <div className="navigatorDiv">
                <ul>
                  <li>Anasayfa</li>
                  <li>Ürünler</li>
                  <li>Hakkımızda</li>
                  <li>İletişim</li>
                  <li>SSS</li>
                  <li>Sepet</li>
                </ul>
            </div>
            <div className="authContainer">
            	<input type="button" value="Log in"/>
                <input type="button" value="Register" />
            </div>

        </div>
    </div>
  )
}

export default Navbar