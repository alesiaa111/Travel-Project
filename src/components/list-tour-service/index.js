import React from "react";
import styles from "./index.module.css";
import { servicesData } from "../../servicesData.js";
import { TourService } from "../tour-service/index.js";

export const ListTourService = () => {
  return (
    <div className={styles.contener}>
      {servicesData.map((props) => {
        return (
          <TourService
            className={styles.wrapper}
            style={{
              backgroundImage: `url(${props.imageUrl})`,
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
