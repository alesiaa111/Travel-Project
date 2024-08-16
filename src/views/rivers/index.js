import React from "react";
import { RiverList } from "../river-list"
import styles from "./index.module.css";
import { Center } from "../../components/center";
import { Title } from "../../components/title";

export const Rivers = () => {
  return (
    <>
    <div className={styles.wrapper}>
      <Center>
        <Title size="xl" title="Маршруты сплавов по рекам Беларуси" />
        <span className={styles.text}>
          Маршруты могут быть как простыми — для новичков, так и сложными — для
          людей с опытом. Как правило, простые маршруты являются однодневными,
          либо занимают пару часов. С них стоит и начинать, если вы впервые
          решили пойти в водный поход, не имея никакого опыта.
        </span>
        <img
          className={styles.rivers}
          src="https://firebasestorage.googleapis.com/v0/b/travel-cac99.appspot.com/o/image%2Frivers.png?alt=media&token=66fb83df-d8cc-47eb-8bca-1573c0f73886"
          alt="Маршруты"
        />
        <span className={styles.text}>
          Маршруты среднего и продвинутого уровней сложности длятся от одного
          дня до трёх. Если вы уверены в своих физических силах и устали от
          городских джунглей, рутины и суеты, то лучшим выбором для вас будет
          именно такой маршрут, дабы «перезагрузиться» как следует и
          поднабраться свежих эмоций.
        </span>
      </Center>
      <RiverList />
      </div>
     </>
  );
};
