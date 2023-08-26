import RootLayout from "@/components/Layouts/RootLayout";
import StorageDeviceCardDetails from "@/components/UI/StorageDeviceCardDetails";
import { useRouter } from "next/router";

const StorageDevicePages = ({ storageDeviceProduct }) => {
  const router = useRouter();
  const storageDeviceId = router.query.storageDeviceId;
  return (
    <>
      <h1>StorageDevice details</h1>
      <StorageDeviceCardDetails storageDeviceProduct={storageDeviceProduct}>
        {storageDeviceId}
      </StorageDeviceCardDetails>
    </>
  );
};

export default StorageDevicePages;
StorageDevicePages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params?.storageDeviceId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      storageDeviceProduct: data,
    },
  };
}
