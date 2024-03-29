import RootLayout from "@/components/Layouts/RootLayout";
import PowerSupplyCard from "@/components/UI/PoweSupplyCard";

const PowerSupplyPages = ({ powersupplyProduct }) => {
  const powersupplyProducts = powersupplyProduct?.filter(
    (product) => product.category === "PowerSupply"
  );
  return (
    <>
      <div className="mt-11">
        <PowerSupplyCard
          powersupplyProducts={powersupplyProducts}
        ></PowerSupplyCard>
      </div>
    </>
  );
};

export default PowerSupplyPages;
PowerSupplyPages.getLayout = function getLayout(page) {
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
      powersupplyProduct: data.data,
    },
    // revalidate: 10,
  };
};
