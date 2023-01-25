import "./Menu.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-scroll";
//<-This part contains some icons what we need in this project->\\
import { FiEdit } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { HiArrowTopRightOnSquare, HiOutlineClock } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import { BsArrowUp } from "react-icons/bs";
//<------------------------------------------------------------->\\
function Menu() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/management/categories")
      .then((res) => {
        console.log(res);
        setDataList(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dataList]);

  useEffect(() => {
    let totalCount = 0,
      totalPrice = 0.0;
    dataList?.map((item) => {
      item?.elements?.map((ittem) => {
        totalCount += ittem?.count;
        totalPrice += ittem?.count * ittem?.price;
      });
    });
    setTotalPrice(totalPrice);
    setTotalCount(totalCount);
  }, [totalPrice, totalCount, dataList]);


  //<--------scroll to top when "arrowUp" button is clicked----------->\\
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // {-------------------------------plus and minus count-----------------------------------} \\
  const plusElement = (elementId) => {
    axios
      .put("http://localhost:4001/api/management/elements/plus/" + elementId)
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const minusElement = (elementId) => {
    axios
      .put("http://localhost:4001/api/management/elements/minus/" + elementId)
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  //<------------------------------------------------------------------->\\
  return (
    <div className="main">
      <div className="main__bg__box">
        <span className="main__bg__span">
          <img
            src="https://www.restaurant-jannat.de/_next/image?url=https%3A%2F%2Fd1nfw7b4288zmf.cloudfront.net%2Fv1-buck%2Fimg%2Frestaurant_backgrounds%2Feeb40cb438eb2d4bd7b218.jpg&w=1920&q=75"
            className="main__bg__img"
            alt="background"
          />
        </span>
        <div className="main__title__main">
          <div className="main__title__box">
            <div className="main__title__div">
              <div>
                <h1
                  className="main__title__h1"
                  style={{ marginBottom: "0", marginTop: "0" }}
                >
                  Restaurant Jannat
                </h1>
                <p className="main__title__p">Indian restaurant in Puchheim</p>
                <p className="main__title__watch__main">
                  <img src="../clock.png" alt="clock img" />
                  <span className="main__time">
                    Today: 11:30 - 14:30 | 17:00 - 22:00
                  </span>
                </p>
                <div className="main__title__button__box__1">
                  <div style={{ height: "30px" }}>
                    <button className="main__title__button__first">
                      <span className="main__title__icon">
                        <HiArrowTopRightOnSquare />
                      </span>
                      <p className="main__title__button__font">PICKUP</p>
                      <span className="main__title__icon">
                        <FiEdit />
                      </span>
                    </button>
                  </div>
                  <div style={{ height: "30px" }}>
                    <button className="main__title__button__first">
                      <span className="main__title__icon">
                        <HiOutlineClock />
                      </span>
                      <p className="main__title__button__font">12:10 - 12:20</p>
                      <span className="main__title__icon">
                        <FiEdit />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="main__title__button__box__2">
                  <div style={{ height: "45px" }}>
                    <a href="#" className="main__title__link">
                      <MdGroups />
                      <span style={{ fontSize: "18px" }}>ORDER TOGETHER</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__body">
        <div className="main__body__main">
          <div className="main__body__part__1">
            <div className="dishlist__main">
              <ul className="dishlist__ul">
                <li className="dishlist__search__li">
                  <div className="dishlist__search__div">
                    <span className="dishlist__search__span">
                      <BsSearch />
                    </span>
                    <input
                      placeholder="search here"
                      className="dishlist__search__input"
                    />
                  </div>
                </li>
                <ul
                  className="dishlist__item__a"
                  style={{ listStyle: "none", textAlign: "right" }}
                >
                  <p>
                    {dataList?.map((data, index1) => {
                      return (
                        <li className="dishlist__item__p" key={index1}>
                          <Link
                            to={"category" + index1}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={() => {
                              document
                                .getElementById("category" + index1)
                                .classList.add("animation");
                              const intervalId = setInterval(() => {
                                document
                                  .getElementById("category" + index1)
                                  .classList.remove("animation");
                                clearInterval(intervalId);
                              }, 1500);
                            }}
                          >
                            {data?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </p>
                </ul>
                <a
                  href="/create-category"
                  className="dishdsc__button__item"
                  style={{ textAlign: "center" }}
                >
                  +List
                </a>
              </ul>
            </div>
          </div>
          <div className="main__body__part__2">
            {/* <This part is dishdsc> */}
            <div>
              <div style={{ width: "100%", height: "100px" }}></div>
              <ul className="dishdsc__ul">
                {dataList?.map((data, index1) => {
                  return (
                    <li
                      className="dishdsc__li__default"
                      key={index1}
                      id={"category" + index1}
                      style={{ scrollMarginTop: "80px" }}
                    >
                      <div className="dishdsc__li__top__title">
                        <h2 className="dishdsc__h2">{data?.title}</h2>
                      </div>
                      <ul
                        style={{ padding: "0", margin: "0", listStyle: "none" }}
                      >
                        {data?.elements?.map((item, index2) => {
                          return (
                            <li className="dishdsc__li" key={index2}>
                              <div className="dishdsc__li__main">
                                <div className="dishdsc__li__box">
                                  <div
                                    style={{
                                      width: "66.6666667%",
                                      margin: "0",
                                    }}
                                  >
                                    <h4
                                      style={{ fontSize: "16px", margin: "0" }}
                                    >
                                      {item?.title}
                                    </h4>
                                    <p
                                      style={{ fontSize: "14px", margin: "0" }}
                                    >
                                      {item?.description}
                                    </p>
                                    <h5
                                      style={{ fontSize: "18px", margin: "0" }}
                                    >
                                      €{item?.price}
                                    </h5>
                                  </div>
                                  <div className="dishdsc__button">
                                    <div className="dishdsc__button__main">
                                      {item?.count === 0 ? (
                                        <button
                                          className="dishdsc__button__item"
                                          onClick={() => plusElement(item?._id)}
                                        >
                                          ADD
                                        </button>
                                      ) : (
                                        <div className="counter__box">
                                          <button
                                            onClick={() =>
                                              minusElement(item?._id)
                                            }
                                            className="counter__button"
                                          >
                                            -
                                          </button>
                                          <span>{item?.count}</span>
                                          <button
                                            onClick={() =>
                                              plusElement(item?._id)
                                            }
                                            className="counter__button"
                                          >
                                            +
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
                <a
                  href="/create-element"
                  className="dishdsc__button__item"
                  style={{ textAlign: "center" }}
                >
                  +food
                </a>
              </ul>
              <div className="dishdsc__footer__main">
                <p style={{ margin: "0", fontSize: "12px" }}>
                  <font>
                    Prices include VAT(plus any delivery costs incurred)
                  </font>
                </p>
                <p style={{ margin: "0", fontSize: "12px" }}>
                  <font>
                    If you have any allergies or dietary restrictions, pleaes
                    contact us directly. We provide information about our dishes
                    upon request
                  </font>
                </p>
              </div>
            </div>
          </div>
          <div className="main__body__part__3">
            <div className="dishbuy">
              <div className="dishbuy__main">
                <h3 className="dishbuy__h3">shopping cart</h3>
                <div style={{ overflowY: "auto" }}>
                  {totalCount === 0 && (
                    <img
                      src="https://www.restaurant-jannat.de/assets/svg/cart-empty.svg"
                      style={{ width: "100%" }}
                      alt="empty img"
                    />
                  )}
                </div>
                <div>
                  {dataList?.map((cate, index1) => {
                    return (
                      <div
                        className="dishdsc__li__default"
                        key={index1}
                        id={cate.category}
                      >
                        {cate.elements?.map((item, index2) => {
                          return (
                            item?.count !== 0 && (
                              <div
                                className="dishbuy__li"
                                key={"item" + index2}
                              >
                                <div style={{ paddingLeft: "0", width: "75%" }}>
                                  <p className="dishbuy__li__p">
                                    {item?.title}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    width: "33.33333%",
                                    position: "absolute",
                                    right: "4rem",
                                    paddingTop: "10px",
                                  }}
                                >
                                  <div className="dishbuy__li__buttonbox">
                                    <button
                                      className="dishbuy__li__button"
                                      onClick={() => minusElement(item?._id)}
                                    >
                                      -
                                    </button>
                                    <span style={{ marginLeft: "20px" }}>
                                      {item?.count}
                                    </span>
                                    <button
                                      className="dishbuy__li__button"
                                      onClick={() => plusElement(item?._id)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div style={{ width: "66.66666666667%" }}>
                                  <div
                                    className="dishbuy__li__p"
                                    style={{ textAlign: "right" }}
                                  >
                                    <span>
                                      €
                                      {(
                                        Math.round(
                                          item?.count * item?.price * 100
                                        ) / 100
                                      ).toFixed(2)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
                {totalCount !== 0 && (
                  <div>
                    <div className="dishbuy__checkout">
                      <p style={{ fontWeight: "700", margin: "0" }}>In total</p>
                      <p style={{ fontWeight: "700", margin: "0" }}>
                        €{(Math.round(totalPrice * 100) / 100).toFixed(2)}
                      </p>
                    </div>
                    <p className="dishbuy__checkout__box">
                      <font>To checkout</font>
                    </p>
                  </div>
                )}
                {totalCount === 0 && (
                  <div>
                    <p className="dishbuy__text">
                      <font>
                        Please select at least one product to place an order
                      </font>
                    </p>
                  </div>
                )}
                <div className="dishbuy__product__box">
                  <img src="../product.png" alt="product img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showTopBtn && (
          <div className="arrow__up">
            <span className="arrow__up__span" onClick={goToTop}>
              <BsArrowUp />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
