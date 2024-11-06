type Props = {
  options: {
    id: number;
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
