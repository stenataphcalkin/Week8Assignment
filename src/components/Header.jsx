import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{ borderBottom: "1px solid #eee", paddingBottom: "5px" }}
      className="navbar-container"
    >
      {" "}
      <nav>
        SPLATTER TACTICS -{" "}
        <Link className="navbar-links" href={"/"}>
          Home{" "}
        </Link>
        |{" "}
        {/* <Link className="navbar-links" href={"/about"}>
          About{" "}
        </Link> */}
        <Link className="navbar-links" href={"/posts"}>
          Blog
        </Link>
      </nav>
    </div>
  );
}
