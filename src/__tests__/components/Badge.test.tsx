import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Badge from "../../components/Badge";

describe("Badge Component", () => {
  it("renders with default variant", () => {
    const { container } = render(<Badge>Default Badge</Badge>);
    expect(container.firstChild.className).toBe("badge");
    expect(container.textContent).toBe("Default Badge");
  });

  it('renders with "new" variant', () => {
    const { container } = render(<Badge variant="new">New Badge</Badge>);
    expect(container.firstChild.className).toBe("badge new");
    expect(container.textContent).toBe("New Badge");
  });

  it('renders with "primary" variant', () => {
    const { container } = render(
      <Badge variant="primary">Primary Badge</Badge>
    );
    expect(container.firstChild.className).toBe("badge primary");
    expect(container.textContent).toBe("Primary Badge");
  });

  it('renders with "alert" variant', () => {
    const { container } = render(<Badge variant="alert">Alert Badge</Badge>);
    expect(container.firstChild.className).toBe("badge alert");
    expect(container.textContent).toBe("Alert Badge");
  });

  it('renders with "info" variant', () => {
    const { container } = render(<Badge variant="info">Info Badge</Badge>);
    expect(container.firstChild.className).toBe("badge info");
    expect(container.textContent).toBe("Info Badge");
  });
});
