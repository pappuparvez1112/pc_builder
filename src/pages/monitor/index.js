import RootLayout from "@/components/Layouts/RootLayout";
import MonitorCard from "@/components/UI/MonitorCard";

const MonitorPages = ({ monitorProduct }) => {
  const monitorProducts = monitorProduct?.filter(
    (product) => product.category === "Monitor"
  );
  return (
    <>
      <div className="mt-11">
        <MonitorCard monitorProducts={monitorProducts}></MonitorCard>
      </div>
    </>
  );
};

export default MonitorPages;
MonitorPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://technet-server-pappuparvez1112.vercel.app/products"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      monitorProduct: data.data,
    },
    // revalidate: 10,
  };
};
