type Props = {
  options: {
    id: string;
    name: string;
  }[];
};

const Select = ({ options }: Props) => {
  return (
    <select>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
