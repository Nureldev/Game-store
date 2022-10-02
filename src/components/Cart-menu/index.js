import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import CartItem from "../Cart-item";
import { calcTotalPrice } from "../utils";
import "./style.css";



const CartMenu = ({ items, onClick, setIsCartVisible }) => {
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setIsCartVisible(false)
    navigate('/order')
  },[navigate])

  return (
    <div className="cart-menu">
      <div className="cart-menu_games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem key={game.id} title={game.title} price={game.price} id={game.id} />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого :</span>
            <span>{totalPrice} руб.</span>
          </div>
          <Button  onClick={handleClick} type="primary">Оформить заказ</Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
