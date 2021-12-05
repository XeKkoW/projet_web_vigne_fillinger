import React from "react";

const DisplayRole = (props) => {
    const role = props.role;
    console.log(role)
    console.log(props)
    const testRole = () => {
        
        
        if(role == "Jungler"){
            return (
                <div className="iconJungler">
        
                </div>
            );
        }
        else if(role == "Top"){
            return (
                <div className="iconTop">
        
                </div>
            );
        }
        else if(role == "Mid"){
            return (
                <div className="iconMid">
        
                </div>
            );
        }
        else if(role == "Bot"){
            return (
                <div className="iconBot">
        
                </div>
            );
        }
        else if(role == "Supp"){
            return (
                <div className="iconSupp">
        
                </div>
            );
        }
        else {
			return (
				<div></div>
			);
		}
    }
    testRole()
    return (
        <div></div>
    );
};
export default DisplayRole;