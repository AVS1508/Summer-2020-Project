import React from "react";

import styles from "./MyFooter.module.css";

export default ({ children }) => {
  return (
    <div>
      <div className={styles.footer}>{children}</div>
    </div>
  );
};
