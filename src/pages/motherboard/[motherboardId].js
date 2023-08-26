import RootLayout from "@/components/Layouts/RootLayout";
import MotherBoardCardDetails from "@/components/UI/MotherBoardCardDetails";
import { useRouter } from "next/router";

const MotherBoardPages = ({ motherboardDetails }) => {
  const router = useRouter();
  const motherboardId = router.query.motherboardId;
  return (
    <>
      <h1>MotherBoard details page</h1>
      <MotherBoardCardDetails motherboardDetails={motherboardDetails}>
        {motherboardId}
      </MotherBoardCardDetails>
    </>
  );
};

export default MotherBoardPages;
MotherBoardPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://technet-server-pappuparvez1112.vercel.app/products/${params?.motherboardId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      motherboardDetails: data,
    },
  };
}
