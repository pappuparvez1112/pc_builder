import RootLayout from "@/components/Layouts/RootLayout";
import StorageDeviceCardDetails from "@/components/UI/StorageDeviceCardDetails";
import { useRouter } from "next/router";

const StorageDevicePages = ({ storageDeviceProduct }) => {
  const router = useRouter();
  const storageDeviceId = router.query.storageDeviceId;
  return (
    <>
      <div className="mt-11">
        <StorageDeviceCardDetails storageDeviceProduct={storageDeviceProduct}>
          {storageDeviceId}
        </StorageDeviceCardDetails>
      </div>
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
    `https://technet-server-pappuparvez1112.vercel.app/products/${params?.storageDeviceId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      storageDeviceProduct: data,
    },
  };
}
