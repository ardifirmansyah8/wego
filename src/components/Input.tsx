type Props = {
  placeholder?: string;
};

const Input = ({ placeholder }: Props) => {
  return <input placeholder={placeholder} />;
};

export default Input;
