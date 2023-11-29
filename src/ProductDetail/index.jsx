import { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

export default function ProductDetail({ products }) {
  let { id } = useParams();
  let [quantity, setQuantity] = useState(1);

  const product = products[id];
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  function onPlusClick() {
    setQuantity(quantity++);
  }
  function onMinusClick() {
    if (quantity >= 1) {
      setQuantity(quantity--);
    }
  }

  return (
    <div className="page">
      <div className="row">
        <div className="title">{product.name}</div>
      </div>
      <div className="row alg-top">
        <img
          src={`/public/assets/${product.img_number}.png`}
          alt=""
          srcset=""
          height={350}
        />
        <div className="column">
          <div className="row">
            <p className="price">{currency}</p>
            <p>no pix</p>
          </div>
          <div className="row">
            <div className="button-buy">COMPRAR AGORA</div>
            <div className="row">
              <div className="btn-quantity" onClick={onMinusClick}>
                -
              </div>
              <p className="quantity-number">{quantity}</p>
              <div className="btn-quantity" onClick={onPlusClick}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
