import RootLayout from "@/components/Layouts/RootLayout";
import StorageDeviceCard from "@/components/UI/StorageDeviceCard";

const StoragePages = ({ storageDeviceProduct }) => {
  const storageDeviceProducts = storageDeviceProduct?.filter(
    (product) => product.category === "StorageDevice"
  );
  return (
    <>
      <h1>Ram page</h1>
      <StorageDeviceCard
        storageDeviceProducts={storageDeviceProducts}
      ></StorageDeviceCard>
    </>
  );
};

export default StoragePages;
StoragePages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      storageDeviceProduct: data.data,
    },
    // revalidate: 10,
  };
};
