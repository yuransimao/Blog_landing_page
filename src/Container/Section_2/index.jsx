import Styles from "./styles.module.scss"
import {BsArrowRight} from "react-icons/bs"
import { Cards } from "../../Components/Cards"
import { featurePopular } from "../../data/data"
export function Section2(){
    return (
        <section className={Styles["Section"]}> 
       <div className={Styles['container-text']}><h1>Featured posts</h1> <span><BsArrowRight/></span></div>
        <div className={Styles["Section-container"]}>
            {featurePopular.map(item =>(
                <Cards key={item.id}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                />
            ))}
            
            </div>
        </section>
    )
}