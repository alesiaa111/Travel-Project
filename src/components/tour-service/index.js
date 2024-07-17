import React, {useState, useCallback} from "react";
import styles from "./index.module.css";
import { Price } from "../price/index.js";
import { Title } from "../title/index.js";
import { Button } from "../button/index.js";
import { Modal } from "../modal/index.js";


export const TourService = ({price, title, serviceType}) => {
 const [showModal, setShowModal] = useState(false);

  const toggler = (prev) => !prev;

  const onModalClose = useCallback(() => setShowModal(false), []);



    return (
        <div className={styles.wrapper}>
            <Price price={price} />
            <Title title={title} />
            <p>{serviceType}</p>
            <Button
            onClick={() => {
              setShowModal(toggler);
            }}
            />
             {showModal && <Modal isOpen={showModal} onClose={onModalClose} />}
        </div>
    )
}