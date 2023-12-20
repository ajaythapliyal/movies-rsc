"use client";
import classes from "./pagination.module.css";

export default function Pagination({ page }: { page: number }) {
  return (
    <div className={classes.paginationContainer}>
      <button className={classes.paginationButton}>{"<"}</button>
      <input
        className={classes.pageInput}
        value={page}
        onChange={() => {}}
      ></input>
      <button className={classes.paginationButton}>{">"}</button>
    </div>
  );
}
