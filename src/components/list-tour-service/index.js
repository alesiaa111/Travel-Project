import React from "react";
import styles from "./index.module.css";
// import { servicesData } from "../../servicesData.js";
import { useSelector } from 'react-redux'
import { TourService } from "../tour-service/index.js";
import { getTourServicesFromList } from "../../store/selectors"

export const ListTourService = () => {

const servicesData = useSelector(getTourServicesFromList)


  return (
    <div className={styles.contener}>
      {servicesData.map((props) => {
        return (
          <TourService
            className={styles.wrapper}
            style={{
              backgroundImage: `url(${props.imageUrl})`
            }}
            serviceid={props.serviceid}
            {...props}
            key={props.id}
          />
        );
      })}
    </div>
  );
};
