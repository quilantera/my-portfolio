import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Experience } from "../../components/Experience";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Portfolio } from "../../components/Portfolio";

export function Home(){
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
        </>
    )
}