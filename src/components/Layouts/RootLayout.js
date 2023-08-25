import styles from "@/styles/Home.module.css";
import {
  FacebookFilled,
  GoogleSquareFilled,
  LinkedinFilled,
  MobileOutlined,
  ProfileOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu } from "antd";
import Link from "next/link";
import Category from "../UI/Category";

const { Header, Content, Footer, Sider } = Layout;

const RootLayout = ({ children }) => {
  // const [items, setItems] = useState();
  // console.log(items);

  // const filterItems = (name) => {
  //   const newItems = allProduct?.filter((data) => data.category === name);
  //   setItems(newItems);
  // };
  // console.log(filterItems, "filter");
  return (
    <Layout>
      <Header className="flex justify-center items-center ">
        <div>
          <h1>
            <Link href="/">PC-Builder</Link>
          </h1>
        </div>
        <Menu className="mx-auto" theme="dark" mode="vertical">
          <Link href="/">
            <items>
              <ProfileOutlined />
              Home
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items className="me-10">
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
          <Link href="/pcbuilder">
            <Button className="hover:bg-slate-300  bg-gray-500">
              Build your Pc
            </Button>
          </Link>
        </Menu>
      </Header>

      <div className=" grid grid-cols-7">
        <Category></Category>

        <Content
          className="col-span-6"
          style={{
            padding: "0 24px",
            minHeight: "100vh",
          }}
        >
          {children}
        </Content>
      </div>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PH-NEWS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProduct: data.data,
    },
    // revalidate: 10,
  };
};
