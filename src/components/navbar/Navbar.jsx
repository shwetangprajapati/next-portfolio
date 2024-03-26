import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image width={48} height={48} src="/logo.svg"  className=" hover:scale-110" alt="logo"/>
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
