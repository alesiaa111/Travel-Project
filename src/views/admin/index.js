import React from "react";
import { Title } from "../../components/title";
import { Center } from "../../components/center";
import { UserList } from "../../views/user-list";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserListFromAdmin } from "../../store/selector";
import { getUserList } from "../../store/async-action";
import styles from "./index.module.css";

export const Admin = () => {

  const dispatch = useDispatch();
  const users= useSelector(getUserListFromAdmin);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);


  return (
    <>
      <Center>
        <Title size="xl" title="Список участников" />
        <div className={styles.contener}>
        {users.map((props) => {
          return (
            <UserList
              className={styles.wrapper}
              {...props}
              key={props.id}
            />
          );
        })}
      </div>
      </Center>
    </>
  );
};
