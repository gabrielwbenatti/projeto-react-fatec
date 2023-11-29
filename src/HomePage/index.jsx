import ProductCard from "../components/ProductCard/ProductCard";
import "./style.css";

export default function HomePage({ products }) {
  // const products = [
  //   {
  //     name: "Monitor para PC AOC 22B1HM5 21,5 LCD LED",
  //     price: 440.1,
  //     img_number: 1,
  //   },
  //   {
  //     name: "Notebook Gamer Samsung ODISSEY HD98EY",
  //     price: 1889.1,
  //     img_number: 2,
  //   },
  //   {
  //     name: "Tanque de Tinta Preto e Branco EPSON",
  //     price: 62.9,
  //     img_number: 3,
  //   },
  // ];

  return (
    <div className="list full-screen">
      {products.map((product, index) => {
        return <ProductCard product={product} index={index} />;
      })}
    </div>
  );
}
