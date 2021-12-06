import React from "react";

const DisplayRole = (props) => {
    const role = props.role;
    console.log(role)

        
        
        if(role == "Jungler"){
            return (
                <div className="iconJungler">
                Jungle
                </div>
            );
        }
        else if(role == "Top"){
            return (
                <div className="iconTop">
                Top
                </div>
            );
        }
        else if(role == "Mid"){
            return (
                <div className="iconMid">
                Mid
                </div>
            );
        }
        else if(role == "Bot"){
            return (
                <div className="iconBot">
                Bot
                </div>
            );
        }
        else if(role == "Supp"){
            return (
                <div className="iconSupp">
                Supp
                </div>
            );
        }
        else {
			return (
				<div></div>
			);
		}
    
  
   
};
export default DisplayRole;