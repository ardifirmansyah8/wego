import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Select from "../../components/Select";

describe("Select Component", () => {
  const options = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  it("renders the select element with options", () => {
    render(<Select value="1" options={options} onChange={vi.fn()} />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeDefined();

    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(options.length);
    expect(optionElements[0].textContent).toBe("Option 1");
    expect(optionElements[1].textContent).toBe("Option 2");
    expect(optionElements[2].textContent).toBe("Option 3");
  });

  it("sets the correct option as selected based on the value prop", () => {
    render(<Select value="2" options={options} onChange={vi.fn()} />);

    const selectElement: HTMLSelectElement = screen.getByRole("combobox");
    expect(selectElement.value).toBe("2");
  });

  it("fires onChange event when a new option is selected", () => {
    const handleChange = vi.fn();
    render(<Select value="1" options={options} onChange={handleChange} />);

    const selectElement = screen.getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "3" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
