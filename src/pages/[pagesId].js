import RootLayout from "@/components/Layouts/RootLayout";
import HomeCardDetails from "@/components/UI/HomeCardDetails";
import { useRouter } from "next/router";

const HomePagesDetails = ({ pagesDetails }) => {
  const router = useRouter();
  const pagesId = router.query.pagesId;
  // const cpuDetails = cpu.filter((product) => product.category === "Cpu");
  // console.log(cpuDetails,"details")
  return (
    <>
      <h1>Home pages details </h1>
      <HomeCardDetails pagesDetails={pagesDetails}>{pagesId}</HomeCardDetails>
    </>
  );
};

export default HomePagesDetails;
HomePagesDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://technet-server-pappuparvez1112.vercel.app/products/${params?.pagesId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      pagesDetails: data,
    },
  };
}
