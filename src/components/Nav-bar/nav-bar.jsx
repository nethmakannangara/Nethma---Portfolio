import React from "react";
import { Navbar, Button } from "flowbite-react";
import './nav-bar.model.css'

function Nav_bar() {
    return (
        <>
            <div className="header-div w-full h-12 flex justify-center mt-5">
                <div className="w-3/4 flex justify-between items-center">
                    <div className="mail-div w-1/2 h-1/2 flex justify-start space-x-3">
                        <div className="mail-icon ml-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <div className="mail cursor-pointer">
                            nethmakannangara07@gmail.com
                        </div>
                    </div>
                    <div className="social-div w-1/2 h-1/2 flex justify-end items-center">
                        <ul className="social-list flex space-x-2 p-3">
                            <li className="cursor-pointer">Linkedin </li>
                            <li>/</li>
                            <li className="cursor-pointer">Github</li>
                            <li>/</li>
                            <li className="cursor-pointer">Whatsapp</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" my-3 w-4/5 m-auto">
                <hr className="header-bottom-line h-1" />
            </div>

        </>
    )
}
export default Nav_bar