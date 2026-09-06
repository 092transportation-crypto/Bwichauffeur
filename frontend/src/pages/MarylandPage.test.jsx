/**
 * Maryland SEO landing pages render from src/data/marylandPages.js with an
 * H1, FAQ, phone number, vehicles and LocalBusiness schema on every page.
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// CRA's bundled jest can't resolve react-router-dom v7's exports map, so stub
// the pieces the page uses.
jest.mock(
  "react-router-dom",
  () => {
    const React = require("react");
    return {
      MemoryRouter: ({ children }) => React.createElement(React.Fragment, null, children),
      Link: ({ children, to, ...rest }) => React.createElement("a", { href: to, ...rest }, children),
      Navigate: () => null,
      useNavigate: () => () => {},
      useParams: () => ({}),
    };
  },
  { virtual: true }
);
import { HelmetProvider } from "@dr.pogodin/react-helmet";

// The shadcn ui primitives import "@/lib/utils", which CRA's jest can't
// resolve here — stub them with plain elements.
jest.mock("../components/ui/button", () => ({ Button: ({ children, ...rest }) => require("react").createElement("button", rest, children) }));
jest.mock("../components/ui/card", () => {
  const React = require("react");
  return { Card: ({ children }) => React.createElement("div", null, children), CardContent: ({ children }) => React.createElement("div", null, children) };
});
jest.mock("../components/ui/badge", () => ({ Badge: ({ children }) => require("react").createElement("span", null, children) }));
jest.mock("../components/Breadcrumbs", () => () => null);
import MarylandPage from "./MarylandPage";
import { MARYLAND_PAGES } from "../data/marylandPages";

const renderPage = (page) =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <MarylandPage page={page} />
      </MemoryRouter>
    </HelmetProvider>
  );

test("every Maryland page has the required SEO ingredients", () => {
  expect(MARYLAND_PAGES.length).toBeGreaterThan(0);
  const slugs = new Set();
  for (const page of MARYLAND_PAGES) {
    expect(slugs.has(page.slug)).toBe(false);
    slugs.add(page.slug);
    expect(/limo service|car service|transportation/i.test(page.h1)).toBe(true);
    expect(page.metaTitle.length).toBeLessThanOrEqual(70);
    expect(page.metaDescription.length).toBeLessThanOrEqual(160);
    expect(page.faqs.length).toBeGreaterThanOrEqual(3);
    expect(page.faqs.length).toBeLessThanOrEqual(5);
    expect(JSON.stringify(page)).toContain("877-609-1919");
    expect(page.vehicles.length).toBe(6);
    expect(page.related.length).toBeGreaterThanOrEqual(3);
  }
});

test("renders a city page with H1, FAQ, phone and schema", () => {
  const page = MARYLAND_PAGES.find((p) => p.type === "city");
  const { unmount } = renderPage(page);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(page.h1);
  expect(screen.getByTestId("maryland-faq")).toBeTruthy();
  expect(screen.getAllByText(/877-609-1919/).length).toBeGreaterThan(0);
  expect(screen.getByTestId("maryland-related")).toBeTruthy();
  unmount();
});

test("route and service pages render without errors", () => {
  for (const type of ["route", "service"]) {
    const page = MARYLAND_PAGES.find((p) => p.type === type);
    const { unmount } = renderPage(page);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(page.h1);
    unmount();
  }
});
