import React from "react";
import MainNav from "../components/MainNav";
import styles from "./BlogPage.module.scss";
import PostCard from "../components/PostCard";
import { posts } from "../assets/dummy-data";

const BlogPage = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
