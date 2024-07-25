import React from "react";
import styles from "./index.module.css";
// import { servicesData } from "../../servicesData.js";
import { useSelector } from 'react-redux'
import { TourService } from "../tour-service/index.js";
import { getTourServices } from ".././store/selectors"

export const ListTourService = () => {

const servicesData = useSelector(getTourServices)


  return (
    <div className={styles.contener}>
      {servicesData.map((props) => {
        return (
          <TourService
            className={styles.wrapper}
            style={{
              backgroundImage: `url(${props.imageUrl})`
            }}
            id={props.id}
            {...props}
            key={props.id}
          />
        );
      })}
    </div>
  );
};
