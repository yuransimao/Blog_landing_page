import Styles from "./styles.module.scss"
import {BsArrowRight} from "react-icons/bs"
export function Section2(){
    return (
        <section className={Styles["Section"]}> 
       <div className={Styles['container-text']}><h1>Featured posts</h1> <span><BsArrowRight/></span></div>
        </section>
    )
}