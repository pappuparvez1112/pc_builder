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
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

const LoginLayout = ({ children }) => {
  const { data: session } = useSession();
  console.log(session, "from header");

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
          {session?.user ? (
            <items>
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "http://localhost:3000/login",
                  })
                }
                type="primary"
                danger
              >
                Logout
              </Button>
            </items>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <items>Login</items>
            </Link>
          )}
        </Menu>
      </Header>

      <div className=" grid grid-cols-7">
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
          BE A PC_BUILDER
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
export default LoginLayout;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://technet-server-pappuparvez1112.vercel.app/products"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProduct: data.data,
    },
    // revalidate: 10,
  };
};
