import { Header } from "../../views/header";
import { Rent } from "../rent";
import { ListTourService } from "../../components/list-tour-service";
import { About } from "../about"
import { RiverList } from "../river-list";

export const Total = () => {
    return (
        <>
        <Header />
        <About />
        <ListTourService />
        <Rent />
        <RiverList />
        </>
    )
}