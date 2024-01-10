import Link from "next/link";
import styles from "@/styles/top.module.css";
import { FC } from "react";
import Tabs from "@/types/e-tabs";

const Top: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href={`/${Tabs.ssg}`} className={styles.a}>
            {Tabs.ssg}
          </Link>
        </li>
        <li>
          <Link href={`/${Tabs.ssr}`} className={styles.a}>
            {Tabs.ssr}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Top;
