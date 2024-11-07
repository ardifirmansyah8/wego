import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Card from "../../components/Card";

describe("Card Component", () => {
  const imgUrl = "https://example.com/image.jpg";
  const title = "Sample Title";
  const childrenText = "This is a description.";

  it("renders the card with image, title, and children", () => {
    const { getByText, getByAltText } = render(
      <Card imgUrl={imgUrl} title={title}>
        {childrenText}
      </Card>
    );

    // Check the image
    const image = getByAltText(imgUrl);
    expect(image.src).toContain(imgUrl);

    // Check the title
    const titleLabel = getByText(title);
    expect(titleLabel.textContent).toBeTruthy();

    // Check the children content
    const description = getByText(childrenText);
    expect(description.textContent).toBeTruthy();
  });

  it("renders the flag when provided", () => {
    const flagText = <span>Flag</span>;
    const { getByText } = render(
      <Card imgUrl={imgUrl} title={title} flag={flagText}>
        {childrenText}
      </Card>
    );

    // Check if the flag is rendered
    const flag = getByText("Flag");
    expect(flag).toBeDefined();
  });

  it("renders without a flag", () => {
    const { queryByText } = render(
      <Card imgUrl={imgUrl} title={title}>
        {childrenText}
      </Card>
    );

    // Check that the flag does not render
    const flag = queryByText("Flag");
    expect(flag).toBeNull();
  });
});
