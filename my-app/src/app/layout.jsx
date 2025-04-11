export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#eee", padding: "10px" }}>
          <h1>🌟 Vishal's Website</h1>
        </header>

        <main>{children}</main>

        <footer
          style={{ background: "#eee", padding: "10px", marginTop: "20px" }}
        >
          <p>© 2025 Vishal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
