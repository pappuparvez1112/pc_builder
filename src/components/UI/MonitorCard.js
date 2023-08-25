import { addToCart } from "@/redux/features/cart/cartSlice";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const MonitorCard = ({ monitorProducts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row
        className="ms-15 "
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {monitorProducts?.map((product) => (
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

              <p style={{ fontSize: "15px" }}></p>

              <Button className="me-12">
                Details <ArrowRightOutlined />
              </Button>
              <Link href="/pcbuilder">
                <Button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-primary"
                >
                  Add
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
export default MonitorCard;
