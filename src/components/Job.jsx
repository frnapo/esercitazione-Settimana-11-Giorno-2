import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Arrow90degDown, Star } from "react-bootstrap-icons";

const Job = ({ data }) => (
  <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      <Star className="ms-3 text-primary" />
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={2}>
      <Link to="/">
        <Button>
          <Arrow90degDown />
        </Button>
      </Link>
    </Col>
  </Row>
);

export default Job;
