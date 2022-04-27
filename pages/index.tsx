import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import PageSelector from "../components/PageSelector";
import { config } from "../config";
import { get } from "../http";
import { Article } from "../interfaces/Article";
import Container from "../components/Container";

interface HomeProps {
  news: Article[];
  currentPage: number;
  maxPages: number;
}

const Home: NextPage<any> = ({ news, currentPage, maxPages }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>{`NextHN | News | Page ${currentPage}`}</title>
      </Head>

      <Header>
        <PageSelector current={currentPage} maxPages={maxPages} />
      </Header>

      <Container styles="mt-24">
        <ul>
          {news.length ? (
            news.map((n: Article, k) => {
              return (
                <li
                  key={k}
                  className="block border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                >
                  <Link href={`/thread/${n.id}`} passHref>
                    <div className="flex flex-row">
                      <div className="flex flex-row items-center justify-center flex-initial font-semibold border-r border-gray-200 hn-orange points-box">
                        {n.points}
                      </div>
                      <div className="flex flex-col flex-1 w-full p-2">
                        <div className="flex flex-col lg:flex-row">
                          <a
                            href={n.url}
                            className="block font-semibold hover:bg-gray-200"
                          >
                            {n.title}
                          </a>

                          <span className="ml-0 text-sm text-gray-500 lg:ml-3">
                            {n.domain}
                          </span>
                        </div>
                        <div className="text-sm">
                          by{" "}
                          <Link href={`/user/${n.user}`}>
                            <a className="user">{n.user}</a>
                          </Link>
                          {" | "}
                          <span className="text-gray-600">{n.time_ago}</span>
                        </div>
                      </div>
                      <div className="flex flex-row flex-no-wrap items-center justify-center points-box">
                        <Link href={`/thread/${n.id}`}>
                          <a className="comments-count">{n.comments_count}</a>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })
          ) : (
            <div>
              <p>Could not load the feed</p>
            </div>
          )}
        </ul>
      </Container>
    </div>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const page = context.query.page ? context.query.page : "1";
  const results = await get("news", page);
  const maxPages = config.maxPages.news;

  return {
    props: { news: results, maxPages, currentPage: Number(page) },
  };
};

export default Home;
