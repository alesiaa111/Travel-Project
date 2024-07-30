import { Header } from "./components/header";
import { Rent } from "./views/rent";
import { ListTourService } from "./components/list-tour-service";

export const Total = () => {
    return (
        <>
        <Header />
        <ListTourService />
        <Rent />
        </>
    )
}