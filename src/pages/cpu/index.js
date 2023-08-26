import RootLayout from "@/components/Layouts/RootLayout";
import CpuCard from "@/components/UI/CpuCard";

const CpuPages = ({ cpudata }) => {
  const cpuProducts = cpudata?.filter((product) => product.category === "Cpu");
  return (
    <>
      <h1>Cpu page</h1>
      {/* {
        allProduct?.filter(category=>category === "Cpu")
      } */}
      {/* <HomeCard allProduct={allProduct}></HomeCard> */}
      <CpuCard cpuProducts={cpuProducts}></CpuCard>
    </>
  );
};

export default CpuPages;
CpuPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      cpudata: data.data,
    },
    // revalidate: 10,
  };
};
