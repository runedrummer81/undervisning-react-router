export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      <nav style={styles.nav}>
        <a href="/" style={styles.link}>
          Home
        </a>
        <a href="/about" style={styles.link}>
          About
        </a>
        <a href="/contact" style={styles.link}>
          Contact
        </a>
      </nav>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    textAlign: "center",
    marginTop: "2rem",
  },
  nav: {
    marginTop: "0.5rem",
  },
  link: {
    margin: "0 0.5rem",
    color: "black",
    textDecoration: "none",
  },
};
