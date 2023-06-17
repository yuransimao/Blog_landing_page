import Styles from "./styles.module.scss"
import Mulher from "../../assets/Mulher.png"

export function Section(){
    return(
        <div className={Styles['Section']}>
            <div className={Styles["Container-text"]}>
                
            </div>
            <div className={Styles["Container-image"]}> 
            <img src={Mulher} width={"1000"} alt="" />
            </div>
        </div>
    )
}