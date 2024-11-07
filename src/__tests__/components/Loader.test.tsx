import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Loader from "../../components/Loader";

describe("Loader Component", () => {
  it("renders the loader element", () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toBeDefined();
  });

  it('applies the "loader" class to the div', () => {
    const { container } = render(<Loader />);

    expect(container.firstChild.className).toBe("loader");
  });
});
