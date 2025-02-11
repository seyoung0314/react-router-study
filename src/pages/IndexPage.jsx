import styles from './IndexPage.module.scss';

const IndexPage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>개발자의 기술 블로그</h1>
      <p className={styles.subtitle}>React와 관련된 기술들을 공유합니다.</p>

      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/blog'>Blog</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;