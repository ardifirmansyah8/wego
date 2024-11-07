import { ForwardedRef, forwardRef } from "react";

type Props = {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = forwardRef(
  ({ placeholder, onChange }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} placeholder={placeholder} onChange={onChange} />;
  }
);

export default Input;
