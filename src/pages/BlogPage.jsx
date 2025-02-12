import React from "react";
import MainNav from "../components/MainNav";
import styles from "./BlogPage.module.scss";
import PostCard from "../components/PostCard";
import { posts } from "../assets/dummy-data";
import { useSearchParams } from "react-router-dom";
import BlogFilter from "../components/BlogFilter";

const BlogPage = () => {
  //?(쿼리스트링)뒤에 값 읽는법
  // useSearchParams
  // => [쿼리스트링을 모아놓은객체 , 쿼리스트링을 생성할 수 있는 함수]
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "latest";
  const search = searchParams.get("search")?.toLowerCase() || "";

  console.log(search);

  return (
    <div className={styles.blog}>
      <BlogFilter />
      <div className={styles.grid}>
        {posts
          .filter((post) => category === "all" || post.category === category)
          .filter(
            (post) =>
              post.title.toLowerCase().includes(search) ||
              post.excerpt.toLowerCase().includes(search)
          )
          .sort((a, b) =>
            sort === "latest"
              ? new Date(b.date) - new Date(a.date)
              : new Date(a.date) - new Date(b.date)
          )
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default BlogPage;
