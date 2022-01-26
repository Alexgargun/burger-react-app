import React from "react";
import AdBurgerForm from "./AdBurgerForm";

class MenuAdmin extends React.Component {
  render() {
    return (
      <div className="menu-admin">
        <h2>Direction of menu</h2>
        <AdBurgerForm addBurger={this.props.addBurger} />
        <button onClick={this.props.loadSampleBurgers}>Load burgers</button>
      </div>
    );
  }
}

export default MenuAdmin;
