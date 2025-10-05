import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar-container">
      {" "}
      <nav>
        <Link className="navbar-links" href={"/"}>
          Home{" "}
        </Link>
        <Link className="navbar-links" href={"/about"}>
          About{" "}
        </Link>
        <Link className="navbar-links" href={"/posts"}>
          Blog
        </Link>
      </nav>
    </div>
  );
}
