import React, { useState } from "react";
import SelectCSS from "./SelectCSS.module.css";

const Select = ({ products }) => {
  const categories = [...new Set(products.map((product) => product.category))];
  const [display, setDisplay] = useState(false);
  const [selected, setSelected] = useState(null);
  const [close, setClose] = useState(false);

  const handleOpen = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  const handleClose = () => {
    setSelected(null);
    setClose(false);
    setDisplay(false);
  };

  const handleChange = (category) => {
    setSelected(category ? category : null);
    setDisplay(false);
    setClose(true);
  };
  return (
    <>
      <div className={SelectCSS.container}>
        <div className={SelectCSS.select}>
          <p>{!selected ? <p>Select a Category</p> : selected}</p>
          <div className={SelectCSS.btn_container}>
            {close && (
              <button
                className={SelectCSS.btn_close}
                onClick={handleClose}
                style={{ display: "block" }}
              >
                <img src="x.svg" alt="" />
              </button>
            )}

            <button className={SelectCSS.btn_open} onClick={handleOpen}>
              {display ? (
                <img src="chevron-up.svg" alt="" />
              ) : (
                <img src="chevron-down.svg" alt="" />
              )}
            </button>
          </div>
          {display && (
            <div className={SelectCSS.list} style={{ display: "flex" }}>
              <ul>
                {categories.map((category) => (
                  <li key={category} onClick={() => handleChange(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={SelectCSS.products}>
          <ul className={SelectCSS.card_container}>
            {products
              .filter((product) => !selected || product.category === selected)
              .map((product) => (
                <li className={SelectCSS.card} key={product}>
                  <img src={product.image} alt="" />
                  {product.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
