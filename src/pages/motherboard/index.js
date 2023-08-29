import RootLayout from "@/components/Layouts/RootLayout";
import MotherBoardCard from "@/components/UI/MotherBoardCard";

const MotherBoardPages = ({ motherboardProduct }) => {
  const motherboardProducts = motherboardProduct?.filter(
    (product) => product.category === "MotherBoard"
  );
  return (
    <>
      <div className="mt-11">
        <MotherBoardCard
          motherboardProducts={motherboardProducts}
        ></MotherBoardCard>
      </div>
    </>
  );
};

export default MotherBoardPages;
MotherBoardPages.getLayout = function getLayout(page) {
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
      motherboardProduct: data.data,
    },
    // revalidate: 10,
  };
};
