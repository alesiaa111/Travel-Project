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
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/index";

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUserListFromAdmin);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const handleAdminRedirect = () => {
    navigate("/admin");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Center>
            <Title size="m" title="Список участников" />
          </Center>
        </div>
        <div className={styles.contener}>
          {users.map((props, index) => {
            return <Users className={styles.users} {...props} key={index} />;
          })}
          <div className={styles.btn}>
            <div className={styles.contener_btn}>
              <Button onClick={handleAdminRedirect} text="Выйти" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
