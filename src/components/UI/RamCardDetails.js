import { Card, Col, Row } from "antd";
import Image from "next/image";

const RamCardDetails = ({ ramDetails: product }) => {
  return (
    <>
      <h1>details</h1>
      <Row
        className="ms-15 "
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col key={product.id} className="" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={product?.image_url}
                width={500}
                height={200}
                responsive
                alt="cpu image"
              />
            }
          >
            <div
              className="line"
              style={{
                height: "5px",

                background: "#000",
                width: "100%",
              }}
            ></div>
            <p
              style={{
                width: "100%",
                fontSize: "10px",
              }}
            ></p>

            <h1>name:{product?.name}</h1>

            <h2>Category:{product?.category}</h2>

            <h3>Price:{product?.price}</h3>
            <h3>Status: {product?.status}</h3>
            <h3>Rating : {product?.rating}</h3>
            <h3>Description:{product?.description}</h3>

            <p style={{ fontSize: "15px" }}></p>

            {/* </Link> */}
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default RamCardDetails;
