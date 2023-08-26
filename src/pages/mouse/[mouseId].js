import RootLayout from "@/components/Layouts/RootLayout";
import MouseCardDetails from "@/components/UI/MouseCardDetails";
import { useRouter } from "next/router";

const MousePages = ({ mouseProduct }) => {
  const router = useRouter();
  const mouseId = router.query.mouseId;
  return (
    <>
      <h1>Mouse details page</h1>
      <MouseCardDetails mouseProduct={mouseProduct}>{mouseId}</MouseCardDetails>
    </>
  );
};

export default MousePages;
MousePages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://technet-server-pappuparvez1112.vercel.app/products/${params?.mouseId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      mouseProduct: data,
    },
  };
}
