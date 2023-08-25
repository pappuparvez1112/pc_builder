import RootLayout from "@/components/Layouts/RootLayout";
import MouseCard from "@/components/UI/RamCard copy";

const MousePages = ({ mouseProduct }) => {
  const mouseProducts = mouseProduct?.filter(
    (product) => product.category === "Mouse"
  );
  return (
    <>
      <h1>Ram page</h1>
      <MouseCard mouseProducts={mouseProducts}></MouseCard>
    </>
  );
};

export default MousePages;
MousePages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      mouseProduct: data.data,
    },
    // revalidate: 10,
  };
};
