import RootLayout from "@/components/Layouts/RootLayout";
import CpuCardDetails from "@/components/UI/CpuCardDetails";
import { useRouter } from "next/router";

const CpuPages = ({ cpuDetails }) => {
  const router = useRouter();
  const cpuId = router.query.cpuId;
  // const cpuDetails = cpu.filter((product) => product.category === "Cpu");
  // console.log(cpuDetails,"details")
  return (
    <>
      <h1>Cpu details page</h1>
      <CpuCardDetails cpuDetails={cpuDetails}>{cpuId}</CpuCardDetails>
    </>
  );
};

export default CpuPages;
CpuPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/products");
//   const data = await res.json();

//   const paths = data?.map((product) => ({
//     params: { cpuId: product.id.toString() },
//   }));
//   return { paths, fallback: false };
// };

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params?.cpuId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      cpuDetails: data,
    },
  };
}
