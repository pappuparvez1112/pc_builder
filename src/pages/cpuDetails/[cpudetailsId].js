import RootLayout from "@/components/Layouts/RootLayout";
import CpuCardDetails from "@/components/UI/CpuCardDetails";

const CpuDetailsPages = ({ cpuDetail }) => {
  const cpuDetails = cpuDetail?.filter((product) => product.category === "Cpu");
  return (
    <>
      <h1>Cpu details page</h1>
      <CpuCardDetails cpuDetails={cpuDetails}></CpuCardDetails>
    </>
  );
};

export default CpuDetailsPages;
CpuDetailsPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/products");
//   const data = await res.json();
//   if (Array.isArray(data)) {
//     const paths = data.map((cpu) => ({
//       params: { cpuId: cpu.id.toString() },
//     }));
//     return { paths: [], fallback: false };
//   } else {
//     console.log("error happende");
//   }

//   // const paths = data?.map((cpu) => ({
//   //   params: { cpuId: cpu.id.toString() },
//   // }));
//   // return { paths, fallback: false };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params.cpudetailsId}`
  );
  const data = await res.json();
  return {
    props: {
      cpuDetail: data,
    },
  };
};
