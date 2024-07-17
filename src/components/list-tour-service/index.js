import React from "react";
import { servicesData } from "../../servicesData.js";
import { TourService } from "../tour-service/index.js";

export const  ListTourService = () => {

  return (
      <div>
      {servicesData.map((props) => {
        return (<TourService {...props} key={props.id}/>)
       })}
      </div>
)         
}
       