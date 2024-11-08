import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Input from "../../components/Input";

describe("Input Component", () => {
  it("renders with a placeholder", () => {
    render(<Input placeholder="Enter text" onChange={vi.fn()} />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeTruthy();
  });

  it("renders without a placeholder", () => {
    const { container } = render(<Input onChange={vi.fn()} />);

    expect(container.getAttribute("placeholder")).toBeNull();
  });

  it("fires onChange event when text is inputted", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const inputElement: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello World" } });

    console.log(inputElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("Hello World");
  });

  it("properly forwards the ref", () => {
    const ref = { current: null };
    render(<Input onChange={vi.fn()} ref={ref} />);

    const inputElement = screen.getByRole("textbox");
    expect(ref.current).toBe(inputElement);
  });
});
