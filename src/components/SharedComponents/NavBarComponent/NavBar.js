import React from 'react'
import i18next from 'i18next';

/*

    <div className={(rtl)?classes.rtl:null}>
    </div>
 */
function NavBar(props) {
    return (
        <nav>
          <button onClick={()=>{
              props.changeDirection("rtl");
              i18next.changeLanguage("ar")
            }}>ar</button>
          <button onClick={()=>{
              i18next.changeLanguage("en")
              props.changeDirection("ltr");
          }}>en</button>
        </nav>
    )
}

export default NavBar
