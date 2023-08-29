import RootLayout from "@/components/Layouts/RootLayout";
import StorageDeviceCard from "@/components/UI/StorageDeviceCard";

const StoragePages = ({ storageDeviceProduct }) => {
  const storageDeviceProducts = storageDeviceProduct?.filter(
    (product) => product.category === "StorageDevice"
  );
  return (
    <>
      <div className="mt-11">
        <StorageDeviceCard
          storageDeviceProducts={storageDeviceProducts}
        ></StorageDeviceCard>
      </div>
    </>
  );
};

export default StoragePages;
StoragePages.getLayout = function getLayout(page) {
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
      storageDeviceProduct: data.data,
    },
    // revalidate: 10,
  };
};
