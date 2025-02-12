import styles from "./BlogFilter.module.scss";
import { categories } from "../assets/dummy-data";
import { useSearchParams } from "react-router-dom";

const BlogFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 카테고리 옵션 이벤트
  const handleCategoryChange = (e) => {
    //url에 선택옵션 넣기
    setSearchParams((pre) => {
      pre.set("category", e.target.value);
      return pre;
    });
  };

  const handleSortChange = (e) => {
    setSearchParams((pre) => {
      pre.set("sort", e.target.value);
      return pre;
    });
  };

  const handleSearch = (e) => {
    setSearchParams((pre) => {
      pre.set("search", e.target.value);
      return pre;
    });
  };

  return (
    <div className={styles.filter}>
      <select
        onChange={handleCategoryChange}
        value={searchParams.get("category") || "all"}
      >
        {categories.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <select
        onChange={handleSortChange}
        value={searchParams.get("sort") || "latest"}
      >
        <option value="latest">최신순</option>
        <option value="oldest">오래된순</option>
      </select>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchParams.get("search") || ""}
      />
    </div>
  );
};

export default BlogFilter;
