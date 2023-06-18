import Styles from "./styles.module.scss"

import { Cards } from "../../Components/Cards"
import { Recentpost } from "../../data/data"
import {MdArrowForwardIos} from "react-icons/md"
export function Section4(){
    return (
        <section className={Styles["Section"]}> 
       <div className={Styles['container-text']}><h1>Recent post</h1> </div>
        <div className={Styles["Section-container"]}>
            {Recentpost.map(item =>(
                <Cards key={item.id}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                customclass="Cards-2"
                />
            ))}
            
            </div>
            <div className={Styles["Paginacao"]}>
                <button className={Styles["Active-btn"]}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>...</button>
                <button>8</button>
                
                <button><MdArrowForwardIos/></button>
            </div>
        </section>
    )
}