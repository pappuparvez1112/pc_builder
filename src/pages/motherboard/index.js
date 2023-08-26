import RootLayout from "@/components/Layouts/RootLayout";
import MotherBoardCard from "@/components/UI/MotherBoard";

const MotherBoardPages = ({ motherboardProduct }) => {
  const motherboardProducts = motherboardProduct?.filter(
    (product) => product.category === "MotherBoard"
  );
  return (
    <>
      <h1>Monitor page</h1>
      <MotherBoardCard
        motherboardProducts={motherboardProducts}
      ></MotherBoardCard>
    </>
  );
};

export default MotherBoardPages;
MotherBoardPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      motherboardProduct: data.data,
    },
    // revalidate: 10,
  };
};
