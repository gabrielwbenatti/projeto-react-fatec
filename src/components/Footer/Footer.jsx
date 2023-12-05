import Row from "../Row/Row";
import "./style.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <Row>
          <h3>
            Fatequinha <br /> E-Commerce
          </h3>
          <div className="spacer-16"></div>
          <div className="column">
            <p>
              13801-005 - Rua Ariovaldo Silveira Franco, 567 <br /> Mogi Mirim -
              SP
            </p>
          </div>
        </Row>
      </footer>
    </div>
  );
}
