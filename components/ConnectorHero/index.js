import React from "react";

import style from "./ConnectorHero.module.css";
import Link from 'next/link';

const ConnectorHero = ({ connector }) => {
  return (
    <div className={style.ConnectorHero}>
      <div className={style.container}>
        <a href="/" className={style.logoContainer}>
          <img src="/logo.svg" className={style.logo} />
        </a>
        <div className={style.content}>
          <div>
            <h1 className={style.title}>
              {connector.name_0} and {connector.name_1} integration + automation
            </h1>
            <p className={style.subtitle}>
            {connector.name_0} and {connector.name_1} integrations couldn’t be easier with the Tray
              Platform’s robust {connector.name_0} and {connector.name_1} connector, which connects any
              services without the need for separate integration tools.
            </p>
            <Link href="https://tray.io/lp/get/demo-multi">
              <button>Get a demo</button>
            </Link>
          </div>
          <div className={style.connectorIconContainer}>
            <img src={connector.logo_0} className={style.connectorIcon} />
            <div className={style.plus}>+</div>
            <img src={connector.logo_1} className={style.connectorIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectorHero;
