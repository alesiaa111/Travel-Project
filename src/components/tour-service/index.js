import React, { useState, useCallback } from "react";
import styles from "./index.module.css";
import { Price } from "../price/index.js";
import { Title } from "../title/index.js";
import { Button } from "../button/index.js";
import { Modal } from "../modal/index.js";
import { Center } from "../center/index.js";

export const TourService = ({
  id,
  serviceId,
  price,
  title,
  serviceType,
  imageUrl,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  const onModalClose = useCallback(() => setShowModal(false), []);

  return (
    <div
      className={styles.contener}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Price price={price} />
      <Title title={title} />
      <p>{serviceType}</p>
      <Center>
        <Button
          text="Записаться"
          onClick={() => {
            setShowModal(toggler);
          }}
        />
      </Center>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={onModalClose}
          serviceId={serviceId}
        />
      )}
    </div>
  );
};
