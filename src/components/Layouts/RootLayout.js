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
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

const RootLayout = ({ children }) => {
  const [isActive, setActive] = useState("hello");

  const sidebarOptions = [
    {
      name: "CPU / Processor",
      href: "/cpu",
      current: isActive === "cpu" ? true : false,
    },
    {
      name: "Motherboard",
      href: "/motherboard",
      current: isActive === "motherboard" ? true : false,
    },
    {
      name: "RAM",
      href: "/ram",
      current: isActive === "ram" ? true : false,
    },
    {
      name: "Power Supply Unit",
      href: "/powersupply",
      current: isActive === "ant" ? true : false,
    },
    {
      name: "Storage Device",
      href: "/storageDevice",
      current: isActive === "ant" ? true : false,
    },
    {
      name: "Monitor",
      href: "/monitor",
      current: isActive === "ant" ? true : false,
    },
    {
      name: "Mouse",
      href: "/mouse",
      current: isActive === "ant" ? true : false,
    },
  ];
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
          <Link href="/Pcbuilder">
            <Button className="hover:bg-slate-300  bg-gray-500">
              Build your Pc
            </Button>
          </Link>
        </Menu>
      </Header>

      <div className=" grid grid-cols-7">
        <div className=" bg-white">
          <div>
            <p className="text-2xl font-bold bg-yellow-500">Catagories</p>
          </div>
          <nav className=" border border-black-300">
            <ul className=" bg-slate-400 bg-transparent  ">
              {sidebarOptions.map((option) => (
                <li
                  className="border-solid border-2 border-gray-500 hover:bg-slate-700"
                  key={option.name}
                >
                  <Link
                    href={option.href}
                    className={
                      (option.current
                        ? "bg-green-700 text-white"
                        : "text-gray hover:text-white hover:bg-orange-700",
                      "group flex gap-x-3 rounded-md p-1 text-sm leading-6 font-semibold ")
                    }
                    onClick={(e) => setActive(option.name)}
                  >
                    {/* <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" /> */}
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* <Menu className="">
          <p className="mb-6 text-base bg-yellow-500">Catagories</p>
          <div className="">
            <Link href="/hello">
              <p className="mb-5">CPU</p>
            </Link>
            <Link href="/hello">
              <p className="mb-5">RAM</p>
            </Link>
            <Link href="/hello">
              <p className="mb-5">MONITOR</p>
            </Link>
            <Link href="/hello">
              <p className="mb-5">KEYBOARD</p>
            </Link>
          </div>

        </Menu> */}
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
