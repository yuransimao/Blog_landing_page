import Styles from "./styles.module.scss"
import {BiSearch} from "react-icons/bi"
import {RxCross2} from "react-icons/rx"
import {AiFillFacebook,AiOutlineTwitter,AiFillYoutube,AiFillInstagram,AiOutlineMenu} from "react-icons/ai"
import { useState } from "react"

export function Navbar(){

    const [show, setShow] = useState(false)

    window.addEventListener('resize', () =>{
        if(window.innerWidth > 768){
            setShow(false)
        }
    })
    return (
        <div className={Styles['Navbar']}>
            <div className={Styles["Logo"]}><a href="#">Logo</a></div>


            <div className={show ? Styles["Responsive-nav"]:Styles["Container-nav"]}>
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
                        <li><AiFillFacebook/></li>
                        <li><AiFillInstagram/></li>
                        <li><AiOutlineTwitter/></li>
                        <li><AiFillYoutube/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={Styles["Menu"]} > <button onClick={() => setShow(!show)}>
                {show ? <RxCross2/> : <AiOutlineMenu/>}
                </button></div>
        </div>
    )
}