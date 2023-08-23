import MonitorImage from "@/assets/images/images.jpg";
import RootLayout from "@/components/Layouts/RootLayout";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import Image from "next/image";

const MonitorPages = () => {
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
        <Col className="pb-6" span={6}>
          <Card
            hoverable
            cover={
              <Image
                src={MonitorImage}
                width={500}
                height={200}
                responsive
                alt="Monitor image"
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
            <h1>Monitor</h1>

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

export default MonitorPages;
MonitorPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
