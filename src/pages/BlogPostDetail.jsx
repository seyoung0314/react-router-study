import { useParams } from "react-router-dom";
import styles from "./BlogPostDetail.module.scss";
import { posts } from "../assets/dummy-data";

const BlogPostDetail = () => {
  // 상세보기 페이지의 id값을 url로 부터읽어옴(String)
  const {postId} = useParams();

  //서버단일조회 (더미데이터)
  const foundPost = posts.find((post) => post.id === +postId);

  const post = {
    ...foundPost,
    comments: [
      { id: 1, author: '김철수', content: '좋은 글이네요!' },
      { id: 2, author: '이영희', content: '잘 배웠습니다.' },
    ],
  };

  return (
<article>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <span>{post.date}</span>
        <span>{post.category}</span>
      </div>
      <div className={styles.content}>{post.excerpt}</div>
      <div className={styles.comments}>
        <h2>댓글</h2>
        {post.comments.map((comment) => (
          <div
            key={comment.id}
            className={styles.comment}>
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </article>
    );
};

export default BlogPostDetail;
