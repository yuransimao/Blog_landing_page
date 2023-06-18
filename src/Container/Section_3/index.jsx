import Styles from "./styles.module.scss"

import { Cards } from "../../Components/Cards"
import { Popularweek } from "../../data/data"
export function Section3(){
    return (
        <section className={Styles["Section"]}> 
       <div className={Styles['container-text']}><h1>Popular this week</h1> <button>See All</button></div>
        <div className={Styles["Section-container"]}>
            {Popularweek.map(item =>(
                <Cards key={item.id}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                customclass="Cards"
                />
            ))}
            
            </div>
        </section>
    )
}