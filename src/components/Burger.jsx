import React from "react";

class Burger extends React.Component {
  render() {
    const { image, name, price, desc } = this.props.details;

    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} alt="pic" />
        </div>
        <div className="burger-details">
          <h3 className="burger-name">
            {name} <span className="price">{price} Br</span>{" "}
          </h3>
          <p>{desc}</p>
          <button className="button-order">Order</button>
        </div>
      </li>
    );
  }
}

export default Burger;
