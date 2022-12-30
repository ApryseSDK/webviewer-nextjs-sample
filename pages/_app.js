import "../styles/globals.css";
import Link from "next/link";

function Item({ name, href }) {
  return (
    <li style={{ display: "inline-block", paddingRight: 16 }}>
      <Link href={href}>{name}</Link>
    </li>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ul>
        <Item name="Home" href="/" />
        <Item name="About (hard-coded)" href="/about" />
        <Item name="About (dynamic)" href="/dynamic/PDFTRON_about" />
        <Item name="Sample (dynamic)" href="/dynamic/sample" />
      </ul>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
