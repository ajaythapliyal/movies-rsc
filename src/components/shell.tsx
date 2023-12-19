import { ReactNode } from "react";
import classes from "./shell.module.css";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={classes.header}>Movie Shuvie</header>
      {children}
    </>
  );
}
