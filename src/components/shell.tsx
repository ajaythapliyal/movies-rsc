import { ReactNode } from "react";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <div>i am shell</div>
      {children}
    </>
  );
}
