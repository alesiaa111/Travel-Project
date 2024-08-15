import React from "react";
import { Title } from "../../components/title";
import { Center } from "../../components/center";
import { Users } from "../users";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserListFromAdmin } from "../../store/selector";
import { getUserList } from "../../store/async-action";
import styles from "./index.module.css";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUserListFromAdmin);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapper}>
        <Center>
          <Title size="m" title="Список участников" />
        </Center>
        <div className={styles.contener}>
          {users.map((props, index) => {
            return <Users className={styles.users} {...props} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};
