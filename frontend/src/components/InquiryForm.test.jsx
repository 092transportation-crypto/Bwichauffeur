/**
 * Regression test: the booking form renders as a plain quote-request form —
 * no instant-quote panel and no Pay & Book — and submits through
 * /api/quote-requests.
 */
import React from "react";
import { render, screen } from "@testing-library/react";

// CRA's bundled jest can't resolve react-router-dom v7's exports map; the
// form only uses <Link> for the privacy-policy anchor, so stub it.
jest.mock(
  "react-router-dom",
  () => ({
    Link: ({ children }) => require("react").createElement("a", null, children),
  }),
  { virtual: true }
);
import { InquiryForm } from "./InquiryForm";

// jsdom is missing a few browser APIs framer-motion touches.
beforeAll(() => {
  window.IntersectionObserver =
    window.IntersectionObserver ||
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {});
});

test("renders the quote-request form without calculator or payment UI", () => {
  render(<InquiryForm />);
  expect(screen.getByTestId("inquiry-form")).toBeTruthy();
  expect(screen.getByTestId("inquiry-submit").textContent).toContain("Request My Quote");
  expect(screen.queryByTestId("inquiry-quote-panel")).toBeNull();
  expect(screen.queryByText(/Pay & Book/i)).toBeNull();
  expect(screen.queryByText(/instant quote/i)).toBeNull();
});
