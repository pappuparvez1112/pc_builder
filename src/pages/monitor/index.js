import RootLayout from "@/components/Layouts/RootLayout";
import MonitorCard from "@/components/UI/MonitorCard";

const MonitorPages = ({ monitorProduct }) => {
  const monitorProducts = monitorProduct?.filter(
    (product) => product.category === "Monitor"
  );
  return (
    <>
      <h1>Monitor page</h1>
      <MonitorCard monitorProducts={monitorProducts}></MonitorCard>
    </>
  );
};

export default MonitorPages;
MonitorPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      monitorProduct: data.data,
    },
    // revalidate: 10,
  };
};
