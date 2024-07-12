import React, { useState, useCallback } from "react";
import { Button } from "../button/index.js";
import { Modal } from "../modal/index.js";
import styles from "./index.module.css";
import { Center } from "../center/index.js";
import { Header } from "../header/index.js";
import { servicesData } from "../../servicesData.js";
import { TourService } from "../tour-service/index.js";

export const ListTourService = () => {
  const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  const onModalClose = useCallback(() => setShowModal(false), []);

  return (
      <Header />
      <div>
      {servicesData.map((service, index) => {
        <TourService
        key={index}
        price={service.price}
        title={service.title}
        serviceType={service.serviceType}
        ></TourService>
          <Button
            onClick={() => {
              setShowModal(toggler);
            }}
          />})}
        
      {showModal && <Modal isOpen={showModal} onClose={onModalClose} />}
      />
      </div>
}})
          

       