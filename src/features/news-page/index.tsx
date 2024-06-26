import styles from "./news-page.module.scss";
import { NewsCard } from "@/components/news-card";
import { INewsCard } from "@/types/news-card";
import { DefaultBanner } from "@/components/default-banner";
import { DefaultCardGrid } from "@/components/default-card-grid";

export const NewsPage = ({ news }: { news: INewsCard[] }) => {
  return (
    <main id="main-content" className={styles["main"]}>
      <section
        aria-label="All news from MAD group"
        className={styles["banner-and-news"]}
      >
        <DefaultBanner title="News" />
        <div className={styles["news"]}>
          <DefaultCardGrid>
            {news.map((newsItem, i) => {
              return (
                <NewsCard
                  key={i}
                  className={styles["news-card"]}
                  newsCard={newsItem}
                />
              );
            })}
          </DefaultCardGrid>
        </div>
      </section>
    </main>
  );
};
