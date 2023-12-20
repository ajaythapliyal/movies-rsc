import { ReactNode } from "react";
import classes from "./shell.module.css";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={classes.header}>
        <h1>Movie Shuvie</h1>
      </header>
      {children}
    </>
  );
}
