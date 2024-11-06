import { ReactNode } from "react";

type Props = {
  variant?: "new" | "primary" | "alert" | "info";
  children: ReactNode;
};

const Badge = ({ variant, children }: Props) => {
  return <div className={`badge ${variant}`}>{children}</div>;
};

export default Badge;
