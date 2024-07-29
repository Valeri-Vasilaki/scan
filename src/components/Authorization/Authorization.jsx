/**
 @returns {JSX.Element} 
 */

import React from "react";
import useAuthorization from "../../hooks/useAuthorization";
import styles from "./Authorization.module.scss";
import Facebook from "../../assets/facebook_icon.svg";
import Google from "../../assets/google_icon.svg";
import Lock from "../../assets/lock_icon.svg";
import Yandex from "../../assets/yandex_icon.svg";
import LargePicture from "../../assets/authorization_large_picture.svg";

const Authorization = () => {
  const {
    username,
    password,
    usernameError,
    passwordError,
    handleLogin,
    handleUsernameChange,
    handlePasswordChange,
  } = useAuthorization();

  return (
    <div className={styles.authPage}>
      <div className={styles.authPage__titlePicture}>
        <h1 className={styles.authPage__h1}>
          Для оформления подписки
          <br />
          на тариф, необходимо <br />
          авторизоваться.
        </h1>
        <img
          className={styles.authPage__largeImg_desktop}
          src={LargePicture}
          alt="People with key"
        />
      </div>

      <div className={styles.authBlock}>
        <img className={styles.authBlock__iconLock} src={Lock} alt="Lock" />
        <div className={styles.authBlock__authForm}>
          <div className={styles.authBlock__authForm_tabs}>
            <div className={styles.authBlock__authForm_tab}>
              <a className={styles.authBlock__authForm_tab_active} href="#">
                {" "}
                Войти{" "}
              </a>
            </div>
            <div className={styles.authBlock__authForm_tab}>
              <a className={styles.authBlock__authForm_tab_inactive} href="#">
                Зарегистрироваться
              </a>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className={styles.authBlock__authForm_input}>
              <label htmlFor="username">Логин или номер телефона:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
                style={{ borderColor: usernameError ? "red" : "" }}
              />
              {usernameError && (
                <div className={styles.authBlock__authForm_error}>
                  Введите корректные данные
                </div>
              )}
            </div>

            <div className={styles.authBlock__authForm_input}>
              <label htmlFor="password">Пароль:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                required
                style={{ borderColor: passwordError ? "red" : "" }}
              />
              {passwordError && (
                <div className={styles.authBlock__authForm_error}>
                  Введите правильный пароль
                </div>
              )}
            </div>

            <div className={styles.authBlock__authForm_button_div}>
              <button
                className={styles.authBlock__authForm_button}
                type="submit"
                disabled={!username || !password}
              >
                Войти
              </button>
            </div>

            <a href="#" className={styles.authBlock__authForm_resetPass}>
              Восстановить пароль
            </a>
          </form>

          <div className={styles.authBlock__socialMedia}>
            <p className={styles.authBlock__socialMedia_enter}>Войти через:</p>
            <div className={styles.authBlock__socialMedia_buttons}>
              <button>
                <img src={Google} alt="Google" />
              </button>
              <button>
                <img src={Facebook} alt="Facebook" />
              </button>
              <button>
                <img src={Yandex} alt="Yandex" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        className={styles.authPage__largeImg_mobile}
        src={LargePicture}
        alt="People with key"
      />
    </div>
  );
};

export default Authorization;
