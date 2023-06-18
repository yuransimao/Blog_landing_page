import {Navbar} from "../Navbar"
import { Section } from "../Section"
import { Section2 } from "../Section_2"
import { Section3 } from "../Section_3"
import { Section4 } from "../Section_4"

export function Layout(){
    return (
        <>
        <Navbar/>
        
            <Section/>
            <Section2/>
            <Section3/>
            <Section4/>
        
        </>
    )
}