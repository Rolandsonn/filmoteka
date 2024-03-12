import React, { FC } from "react";
import styles from "./Pagination.module.css";

interface PageProps {
  page: number;
}

const Pagination: FC<PageProps> = ({ page }) => {
  return (
    <div className={styles.wrapper}>
      <button>prev</button>
      <span>{page}</span>
      <button>next</button>
    </div>
  );
};

export default Pagination;
