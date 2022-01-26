import React from "react";

class AdBurgerForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = (event) => {
    event.preventDefault();
    const Burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addBurger(Burger);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input
          ref={this.nameRef}
          name="name"
          type="text"
          placeholder="name"
          autoComplete="off"
        />
        <input
          ref={this.priceRef}
          name="price"
          type="text"
          placeholder="price"
          autoComplete="off"
        />
        <select ref={this.statusRef} name="status" className="status">
          <option value="avaliable">avaliable</option>
          <option value="unavaliable">unavaliable</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="Desc"></textarea>
        <input
          ref={this.imageRef}
          name="image"
          type="text"
          placeholder="Image"
          autoComplete="off"
        />
        <button type="submit">+ Add to Menu</button>
      </form>
    );
  }
}

export default AdBurgerForm;
