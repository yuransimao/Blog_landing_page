import Styles from "./styles.module.scss"
import Mulher from "../../assets/Mulher.png"
import { InputEmail } from "../../Components/input"
import { Button } from "../../Components/Button"
export function Section(){
    return(
        <div className={Styles['Section']}>
            <div className={Styles["Container-text"]}>
                <h2>Welcome my Blog</h2>
                <h1>We all owe <br />deth a life.</h1>
                <p>Here is a place that  i share my writings about design and photography. Read, write & discuss with me. </p>
                <div className={Styles["container"]}>
                    <InputEmail/>
                    <Button/>
                </div>
            </div>
            <div className={Styles["Container-image"]}> 
            <img src={Mulher}  alt="" />
            </div>
        </div>
    )
}