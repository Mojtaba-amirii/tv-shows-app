import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App.jsx";

test("renders home text", async () => {
  // Mock fetch to return an empty array immediately
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );

  render(<App />);
  const homeElement = await screen.findByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});
