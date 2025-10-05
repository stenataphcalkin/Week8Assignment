import { db } from "@/utils/dbConnection";
import Image from "next/image";
import heroImage from "./assets/paintball.jpg";

export default function HomePage() {
  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "20px",
      }}
    >
      <h1>Welcome to Splatter Tactics</h1>

      <Image src={heroImage} alt="Speedball Paintball Game Photo" />

      <p>
        The only time it&apos;s okay to wear high-visibility colors in a fire
        fight.
      </p>
      <br></br>
      <p>
        We bring a series of quick and dirty guides to paintballing, both in the
        woods and on the speedball courts.
        <br></br>
        <br />
        We love to see your feedback on our blogs, so feel free to share your
        thoughts and inputs, or what you would like to see next!
      </p>
    </div>
  );
}
