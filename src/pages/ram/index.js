import RootLayout from "@/components/Layouts/RootLayout";
import RamCard from "@/components/UI/RamCard";

const RamPages = ({ ramProduct }) => {
  const ramProducts = ramProduct?.filter(
    (product) => product.category === "Ram"
  );
  return (
    <>
      <div className="mt-11">
        <RamCard ramProducts={ramProducts}></RamCard>
      </div>
    </>
  );
};

export default RamPages;
RamPages.getLayout = function getLayout(page) {
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
      ramProduct: data.data,
    },
    // revalidate: 10,
  };
};
