import Row from "../Row/Row";
import "./style.css";

export default function Header() {
  return (
    <div>
      <header>
        <Row>
          <img src="/public/assets/logotipo.png" height={90} alt="" />
          <div className="spacer-16"></div>
          <h3>
            Fatequinha <br /> E-Commerce
          </h3>
          <div className="spacer-16"></div>
          <input type="search" name="search" id="search" />
        </Row>
      </header>
    </div>
  );
}
