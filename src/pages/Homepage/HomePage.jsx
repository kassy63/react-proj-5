import React, { useState } from "react";
import MenuSlide from "./component/menuslide/MenuSlide";
import "./HomePage.style.css";
import { IoSearch } from "react-icons/io5";
import TopSlide from "./component/TopSlide/TopSlide";
import { useNavigate } from "react-router-dom";
import BookmarkInfo from "./component/bookmarkslide/BookmarkInfo";
import RandomRecipe from "./component/RandomRecipe/RandomRecipe";
import { Form } from "react-bootstrap";

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (e) => {
    e.preventDefault();
    navigate(`recipes?q=${keyword}`);
    setKeyword("");
  };
  return (
    <div className="home-page">
      <div className="top-box-area">
        <div className="top-box-area-overlay">top-box-overlay</div>
        <div className="top-box-area-contents">
          <div className="top-text">
            냉장고 속 재료로
            <br /> 레시피를 검색하세요!
          </div>
          <div className="input-box">
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <input
                type="text"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <button className="top-search-button" type="submit">
                <IoSearch size="26px" color="#ed0c0c" className="mb-1 mr-3" />
              </button>
            </Form>
          </div>
        </div>
      </div>
      <div className="top-slide-area">
        <TopSlide />
      </div>
      <div classNmae="home_page_banner_container">{/* <Baner/> */}</div>
      <div>
        <MenuSlide />
        {/* RandomSlide에서 RandomeRecipe로 변경 */}
        <RandomRecipe />
        <BookmarkInfo />
      </div>
    </div>
  );
};

export default HomePage;
