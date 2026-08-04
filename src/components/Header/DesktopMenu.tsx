
import {  NavLink } from "react-router-dom";
import { Animated } from "../animations/Animated";
import { navItems } from "./itemsDesktop";


const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `theme-button transition-all duration-300 ${
            isActive ? "nav-active" : ""
        }`;

export function DesktopMenu() {
    return (                  
         <Animated animation="fadeUp">
                <nav className="hidden lg:block">
                    <ul className="flex gap-3 text-[20px] 4xl:text-[26px]">
                        {navItems.map((item) => (
                            <li key={item.to} className="theme-button developer">
                                <NavLink
                                    to={item.to}
                                    end={item.end}
                                    className={navLinkClass}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                 
            </Animated>


            

           

    );
}