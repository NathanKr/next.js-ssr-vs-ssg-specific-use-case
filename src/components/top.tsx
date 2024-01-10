import Link from "next/link";
import styles from "@/styles/top.module.css";
import { FC } from "react";
import Tabs from "@/types/e-tabs";

const Top: FC = () => {
  const elems = [];

  for (const tab in Tabs) {
    const elem = (
      <li>
        <Link href={`/${tab}`} className={styles.a}>
          {tab}
        </Link>
      </li>
    );
    elems.push(elem);
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {elems}
        {/* <li>
          <Link href={`/${Tabs.ssg}`} className={styles.a}>
            {Tabs.ssg}
          </Link>
        </li>
        <li>
          <Link href={`/${Tabs.ssr}`} className={styles.a}>
            {Tabs.ssr}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Top;
