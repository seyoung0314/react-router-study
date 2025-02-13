import styles from "./BlogFilter.module.scss";
import { useEffect,useState } from "react";
import { categories } from "../assets/dummy-data";
import { useSearchParams } from "react-router-dom";

const BlogFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("search") || "");

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
    setSearchText(e.target.value); // 로컬 상태에서 먼저 관리
  };

  // searchText가 변경될 때마다 URL의 search 파라미터도 업데이트
  useEffect(() => {
    setSearchParams((prev) => {
      if (searchText) {
        prev.set("search", searchText);
      } else {
        prev.delete("search");
      }
      return prev;
    });
  }, [searchText, setSearchParams]);


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
        value={searchText}
      />
    </div>
  );
};

export default BlogFilter;
