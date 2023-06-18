import {Navbar} from "../Navbar"
import { Section } from "../Section"
import { Section2 } from "../Section_2"

export function Layout(){
    return (
        <>
        <Navbar/>
        <div className="Layout">
            <Section/>
            <Section2/>
        </div>
        </>
    )
}