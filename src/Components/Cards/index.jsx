import Styles from "./styles.module.scss"
import {GrView} from "react-icons/gr"
import {BiComment} from "react-icons/bi"
import P from "prop-types"

Cards.propTypes ={
    title: P.string,
    subtitle : P.string,
    img : P.string,
    customclass : P.string
}

export function Cards(props){
   
    return(
       <div className={Styles[props.customclass]}>
        <div className={Styles["Cards-image"]}> <img src={props.img}alt="cidae" /></div>
        <div className={Styles["Cards-text"]}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <div className={Styles["Cards-icons"]}>
                <div className={Styles["icons-coment"]}><BiComment/> <span>3</span></div>
                <div className={Styles["icons-view"]}><GrView/> <span>14.2k</span> </div>
            </div>
        </div>
       </div>
    )
}