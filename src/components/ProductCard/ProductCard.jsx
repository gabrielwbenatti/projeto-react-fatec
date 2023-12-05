import { Link } from "react-router-dom";
import "./ProductCard.css";
import Row from "../Row/Row";

function ProductCard({ product, index }) {
  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Link to={`/product/${index}`}>
      <div className="card">
        <div>
          <img
            src={`/public/assets/${product.img_number}.png`}
            alt=""
            srcset=""
            className="tumbnail"
          />
        </div>
        <div>{product.name}</div>
        <Row>
          <div className="price">{currency} </div>
          <div>no pix</div>
        </Row>
      </div>
    </Link>
  );
}

export default ProductCard;
