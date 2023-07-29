import Image from "next/image";
import styles from "./page.module.css";
import Heropage from "@/components/Heropage";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div>
      <Heropage />
      <About />
      <Portfolio />
    </div>
  );
}
