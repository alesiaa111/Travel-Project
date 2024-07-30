import { Header } from "../../components/header";
import { Rent } from "../rent";
import { ListTourService } from "../../components/list-tour-service";
import { About } from "../about"

export const Total = () => {
    return (
        <>
        <Header />
        <About />
        <ListTourService />
        <Rent />
        </>
    )
}