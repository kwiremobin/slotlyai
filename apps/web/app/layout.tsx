// app/layout.tsx
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <h1>My Website</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 My Website</p>
        </footer>
      </body>
    </html>
  );
}
