import CpuImage from "@/assets/images/images.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const HomeCard = () => {
  const { Meta } = Card;
  return (
    <>
      <h1 className="text-xl text-center pb-10 pt-4">🗽TODAY HIGHLIGHT</h1>

      <Row
        className="ms-15 "
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={CpuImage}
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

            <h1>CPU</h1>

            <h2>Category</h2>

            <h3>Price</h3>
            <h3>Status ( In Stock | Out of stock)</h3>
            <h3>Rating (Out of 5 Stars)</h3>

            <p style={{ fontSize: "15px" }}></p>
            {/* <Link href={`/news/${news?.id}`}> */}
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Details <ArrowRightOutlined />
            </p>
            {/* </Link> */}
          </Card>
        </Col>
        <Col className="" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={CpuImage}
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
            <h1>CPU</h1>

            <h2>Category</h2>

            <h3>Price</h3>
            <h3>Status ( In Stock | Out of stock)</h3>
            <h3>Rating (Out of 5 Stars)</h3>

            <p style={{ fontSize: "15px" }}></p>
            {/* <Link href={`/news/${news?.id}`}> */}
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Details <ArrowRightOutlined />
            </p>
            {/* </Link> */}
          </Card>
        </Col>
        <Col className="" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={CpuImage}
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
            <h1>CPU</h1>

            <h2>Category</h2>

            <h3>Price</h3>
            <h3>Status ( In Stock | Out of stock)</h3>
            <h3>Rating (Out of 5 Stars)</h3>

            <p style={{ fontSize: "15px" }}></p>
            {/* <Link href={`/news/${news?.id}`}> */}
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Details <ArrowRightOutlined />
            </p>
            {/* </Link> */}
          </Card>
        </Col>
        <Col className="" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={CpuImage}
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
            <h1>CPU</h1>

            <h2>Category</h2>

            <h3>Price</h3>
            <h3>Status ( In Stock | Out of stock)</h3>
            <h3>Rating (Out of 5 Stars)</h3>

            <p style={{ fontSize: "15px" }}></p>
            {/* <Link href={`/news/${news?.id}`}> */}
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Details <ArrowRightOutlined />
            </p>
            {/* </Link> */}
          </Card>
        </Col>
        <Col className="" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={CpuImage}
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
            <h1>CPU</h1>

            <h2>Category</h2>

            <h3>Price</h3>
            <h3>Status ( In Stock | Out of stock)</h3>
            <h3>Rating (Out of 5 Stars)</h3>

            <p style={{ fontSize: "15px" }}></p>
            {/* <Link href={`/news/${news?.id}`}> */}
            <p
              style={{
                fontSize: "15px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                width: "100%",
                padding: "2px 5px ",
                fontWeight: "300",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Details <ArrowRightOutlined />
            </p>
            {/* </Link> */}
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default HomeCard;
