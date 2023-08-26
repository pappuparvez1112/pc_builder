import RootLayout from "@/components/Layouts/RootLayout";
import MonitorCardDetails from "@/components/UI/MonitorCardDetails";
import { useRouter } from "next/router";

const MonitorPages = ({ monitorProduct }) => {
  const router = useRouter();
  const monitorId = router.query.monitorId;
  return (
    <>
      <h1>Monitor details page</h1>
      <MonitorCardDetails monitorProduct={monitorProduct}>
        {monitorId}
      </MonitorCardDetails>
    </>
  );
};

export default MonitorPages;
MonitorPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://technet-server-pappuparvez1112.vercel.app/products/${params?.monitorId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      monitorProduct: data,
    },
  };
}
