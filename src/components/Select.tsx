type Props = {
  options: string[];
};

const Select = ({ options }: Props) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
