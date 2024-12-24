import React from "react";
import "./home-body.model.css"
import profileLogo from "../../assets/img/profile_picture.jpg"

export default function Home_body() {
    return(
        <>
         <div className="main-body w-2/3 m-auto">
            <div className="profile-photo my-6 w-full">
                <img src={profileLogo} alt="" srcset="profile picture" className="w-40 h-40 rounded-full object-cover m-auto"/>
            </div>
         </div>

         <div className="w-full flex justify-center p-3 intro-text">
            <div className="m-auto text-center a">Hi I'm Nethma Chathuranga 👋</div>
         </div>

        <div className="w-full flex justify-center intro-section">
            <div className="w-2/3 m-auto text-center">
            Transforming ideas <br/> into seamless digital experiences <br /> as a passionate full-stack developer <br /> in the making.
            </div>
        </div>
        </>
    )
}