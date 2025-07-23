import * as React from "react";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Content
import { articles } from "../../data/blog";

// Styles
import "../../styles/global.scss";

const Blog = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const [filter, setFilter] = React.useState("all"); // "all" or "published"

  // Find the last active article across all years
  const lastPublished =
    articles
      ?.flatMap((yearGroup) => yearGroup.posts)
      ?.filter((article) => article.active)
      ?.pop()?.id || articles?.[0]?.posts?.[0]?.id;

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="blog">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main className="flex flex-col mb-10 max-w-full">
          <h3 className="about-title text-[50px] mb-6 font-black px-[5%] w-full mt-10 md:mt-0">
            A developer's logbook
          </h3>
          <p className="paragraph md:w-[880px] text-[18px] px-[5%] w-full">
            Written by me, for my future self. You will find here an honest (and
            sometimes wrong) view of front-end, tech career, algorithms,
            creative development and technical leadership.
          </p>

          <div className="px-[5%] mt-3">
            <br />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[var(--bg-primary)] text-[var(--tw-text-gray-primary)] px-4 py-2 rounded border border-[var(--border-primary)] focus:outline-none focus:border-[var(--border-primary)]"
            >
              <option value="all">All Posts</option>
              <option value="scheduled">Scheduled posts</option>
              <option value="published">Published only</option>
            </select>
          </div>

          {articles
            ?.slice()
            .reverse()
            .map((yearGroup) => {
              const hasPublishedPosts = yearGroup.posts.some(
                (post) => post.active
              );
              const hasScheduledPosts = yearGroup.posts.some(
                (post) => !post.active
              );
              return (
                <React.Fragment key={yearGroup.year}>
                  {(filter === "all" ||
                    (filter === "published" && hasPublishedPosts) ||
                    (filter === "scheduled" && hasScheduledPosts)) && (
                    <p className="px-[5%] mb-8 mt-12 text-[20px] text-[#555555] font-bold">
                      {yearGroup.year}
                    </p>
                  )}
                  <ul className="text-[18px] w-full">
                    {yearGroup.posts
                      ?.slice()
                      .reverse()
                      .filter(
                        (post) =>
                          filter === "all" ||
                          (filter === "published" && post.active) ||
                          (filter === "scheduled" && !post.active)
                      )
                      .map((article) => (
                        <li
                          key={article.id}
                          id={article.id}
                          className="flex border-b-[1px] border-[var(--border-primary)] flex-col items-start group px-[5%] pb-8 pt-5 w-full text-[var(--color-total-inverse)] transition-none hover:bg-[var(--bg-total)]"
                        >
                          <a
                            href={
                              article.active
                                ? article.link
                                : `#${lastPublished}`
                            }
                          >
                            <div className="flex flex-row items-center mb-3 md:mb-0">
                              <p className="pl-0 md:pr-4 pr-2 md:pl-0 text-[30px] w-[50px] inline-block shrink-0 text-center">
                                {article.emoji}
                              </p>
                              <p className="font-bold break-words text-[18px] md:text-[20px] group-hover:text-[var(--color-total-inverse)] group-hover:underline transition-none">
                                <span className="transition-none">{article.id}.</span>{" "}
                                {article.title}
                              </p>
                            </div>
                            <div className="md:pl-[50px]">
                              <p className="text-[#777777] mb-6 text-[18px] group-hover:text-[var(--color-total-inverse)] max-w-[700px] block transition-none">
                                {article.active
                                  ? article.description
                                  : "Will be published soon..."}
                              </p>
                              <p className="text-[16px] group-hover:text-[#666] group-hover:hidden transition-none">
                                {article.active
                                  ? article.readTime
                                  : "Go to the last published ->"}
                              </p>
                              <p className="text-[16px] hidden group-hover:block group-hover:text-[var(--color-total-inverse)] font-bold transition-none">
                                {article.active
                                  ? "Read ->"
                                  : "Go to the last published ->"}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                  </ul>
                </React.Fragment>
              );
            })}
        </main>
        <Note />
      </div>
    </>
  );
};

export default Blog;

export const Head = () => <title>Blog | cesarolvr</title>;
