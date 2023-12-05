import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../HomePage";
import ProductDetail from "../../ProductDetail";

export default function Rotas() {
  const products = [
    {
      name: "Monitor para PC AOC 22B1HM5 21,5 LCD LED",
      price: 440.1,
      img_number: 1,
    },
    {
      name: "Notebook Gamer Samsung ODISSEY HD98EY",
      price: 1889.1,
      img_number: 2,
    },
    {
      name: "Tanque de Tinta Preto e Branco EPSON",
      price: 62.9,
      img_number: 3,
    },
    // {
    //   name: "Tanque de Tinta Preto e duiedhiuehdieud EPSON",
    //   price: 62.9,
    //   img_number: 4,
    // },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
