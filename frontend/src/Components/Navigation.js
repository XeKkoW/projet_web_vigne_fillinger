import React from "react";
import {Navlink} from "react-router-dom"

const Navigation = () => {
return(
    <div className = "navigation">
        <Navlink exact to="/">
            Accueil
        </Navlink>
        <Navlink exact to="a-propos">
            A propos
        </Navlink>
    </div>
)
}

export default Navigation;