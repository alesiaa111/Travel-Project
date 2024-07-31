import RiversImg from "../../images/rivers.png";
import { Title } from "../../components/title";
import { Center } from "../../components/center";
import styles from "./index.module.css";

export const Rivers = () => {
  return (
       <>
      <Center>
        <Title size="xl" title="Маршруты сплавов по рекам Беларуси " />
        <span className={styles.text}>
          Маршруты могут быть как простыми — для новичков, так и сложными — для
          людей с опытом. Как правило, простые маршруты являются однодневными,
          либо занимают пару часов. С них стоит и начинать, если вы впервые
          решили пойти в водный поход, не имея никакого опыта.
        </span>
       
        <img className={styles.rivers} src={RiversImg} alt="Маршруты" />
       
        <span className={styles.text}>
          Маршруты среднего и продвинутого уровней сложности длятся от одного
          дня до трёх. Если вы уверены в своих физических силах и устали от
          городских джунглей, рутины и суеты, то лучшим выбором для вас будет
          именно такой маршрут, дабы «перезагрузиться» как следует и
          поднабраться свежих эмоций.
        </span>
      </Center>
    </>
  );
};
