import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const HomeCard = ({ allProduct }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row
        className="pt-11"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProduct?.map((product) => (
          <Col key={product.id} className="mb-12" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image_url}
                  width={500}
                  height={180}
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

              <h1>{product?.name}</h1>

              <h2>{product?.category}</h2>

              <h3>{product?.price}</h3>
              <h3>{product?.status}</h3>
              <h3>Ratings : {product?.rating} </h3>

              <p style={{ fontSize: "15px" }}></p>

              <Link href={`/${product?._id}`}>
                <Button className="me-12">
                  Details <ArrowRightOutlined />
                </Button>
              </Link>

              {/* </Link> */}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeCard;
