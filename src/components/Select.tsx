type Props = {
  value: string;
  options: {
    id: string;
    name: string;
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, options, onChange }: Props) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
