import { ReactNode } from "react";

type Props = {
  imgUrl: string;
  title: string;
  children: ReactNode;
};

const Card = ({ imgUrl, title, children }: Props) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={imgUrl} />
      <div className="card-desc">
        <label>{title}</label>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
