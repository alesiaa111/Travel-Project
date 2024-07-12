import React from "react";
import { servicesData } from "../../servicesData";
import { Price } from "../price/index.js";
import { Title } from "../title/index.js"

export const TourService = ({price, title, serviceType}) => {
    return (
        <div>
            <Price price={price} />
            <Title title={title} />
            <p>{serviceType}</p>
        </div>
    )
}