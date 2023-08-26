import RootLayout from "@/components/Layouts/RootLayout";
import MouseCard from "@/components/UI/MouseCard";

const MousePages = ({ mouseProduct }) => {
  const mouseProducts = mouseProduct?.filter(
    (product) => product.category === "Mouse"
  );
  return (
    <>
      <h1>Mouse page</h1>
      <MouseCard mouseProducts={mouseProducts}></MouseCard>
    </>
  );
};

export default MousePages;
MousePages.getLayout = function getLayout(page) {
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
      mouseProduct: data.data,
    },
    // revalidate: 10,
  };
};
