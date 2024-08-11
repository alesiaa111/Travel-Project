import React from "react";
import styles from "./index.module.css";
import { Title } from "../../components/title";
import { Center } from "../../components/center";
import { useSelector } from "react-redux";
import { TourService } from "../tour-service/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTourServices } from "../../store/async-action";
import { getTourServicesFromList } from "../../store/selector";

export const ListTourService = () => {
  const dispatch = useDispatch();
  const servicesData = useSelector(getTourServicesFromList);

  useEffect(() => {
    dispatch(getTourServices());
  }, [dispatch]);

  return (
    <>
      <Center>
        <Title size="xl" title="Наши услуги" />
      </Center>

      <div className={styles.contener}>
        {servicesData.map((props) => {
          return (
            <TourService
              className={styles.wrapper}
              style={{
                backgroundImage: `url(${props.imageUrl})`,
              }}
              serviceId={props.serviceId}
              {...props}
              key={props.id}
            />
          );
        })}
      </div>
    </>
  );
};
