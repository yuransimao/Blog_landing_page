import Styles from "./styles.module.scss"
import {BiSearch} from "react-icons/bi"
import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiFillInstagram,AiOutlineMenu} from "react-icons/ai"

export function Navbar(){
    return (
        <div className={Styles['Navbar']}>
            <div className={Styles["Logo"]}><a href="#">Logo</a></div>
            <div className={Styles["Container-nav"]}>
                <div className={Styles['Nav-link']}>
                    
                    <ul>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={Styles['Container']}>
                    <div className={Styles["Search"]}>
                        <input type="search" placeholder ="Search"/>
                        <span><BiSearch/></span>
                    </div>
                    <div className={Styles['Icons']}>
                        <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={Styles["Menu"]}> <button><AiOutlineMenu/></button></div>
        </div>
    )
}