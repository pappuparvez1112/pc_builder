import RootLayout from "@/components/Layouts/RootLayout";
import RamCardDetails from "@/components/UI/RamCardDetails";
import { useRouter } from "next/router";

const RamPages = ({ ramDetails }) => {
  const router = useRouter();
  const ramId = router.query.ramId;
  // const cpuDetails = cpu.filter((product) => product.category === "Cpu");
  // console.log(cpuDetails,"details")
  return (
    <>
      <h1>Cpu details page</h1>
      <RamCardDetails ramDetails={ramDetails}>{ramId}</RamCardDetails>
    </>
  );
};

export default RamPages;
RamPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params?.ramId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      ramDetails: data,
    },
  };
}
