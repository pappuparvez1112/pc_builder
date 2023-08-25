import RootLayout from "@/components/Layouts/RootLayout";
import RamCard from "@/components/UI/RamCard";

const RamPages = ({ ramProduct }) => {
  const ramProducts = ramProduct?.filter(
    (product) => product.category === "Ram"
  );
  return (
    <>
      <h1>Ram page</h1>
      <RamCard ramProducts={ramProducts}></RamCard>
    </>
  );
};

export default RamPages;
RamPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      ramProduct: data.data,
    },
    // revalidate: 10,
  };
};
