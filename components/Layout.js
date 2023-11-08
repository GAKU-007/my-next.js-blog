import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

//名前を変数に入れてみた
const name = "Gaxas";
export const siteTitle = "Gaxas blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* ヘッドの中にメタデータを入れる */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ヘッダーの中でアイコンを作成 */}
      <header className={styles.header}>
        <img src="/images/profile.jpg" className={utilStyles.borderCircle} />
        <h1 className={utilStyles.heading2x1}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
