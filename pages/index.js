import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

//SSG
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

//SSRはgetServerSideProps(context)

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          オアシスへようこそ！私ここの管理者のGaxasだ。ここでは私のことについて紹介するよ
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝Gaxasの趣味ブログ的なもの</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                {/* サムネイル画像 */}
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                {/* サムネイル下の紹介文 */}
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>
                {/* 日付を表示 */}
                {date}
              </small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
