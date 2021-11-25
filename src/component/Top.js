import Image from "next/image";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Image //
            src="/images/logo.jpg"
            alt="logo"
            width="80"
            height="80"
          />
        </div>
        <Header as="h1">JW</Header>
      </div>

      <Gnb />
    </div>
  );
}
