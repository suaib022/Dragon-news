// import React from 'react';
import moment from "moment";

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src="../../../../Images/logo.png" alt="" />
            <p>Journalism Without Fear Or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p> 
        </div>
    );
};

export default Header;