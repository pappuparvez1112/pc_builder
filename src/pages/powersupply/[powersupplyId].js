import RootLayout from "@/components/Layouts/RootLayout";
import PowerSupplyCardDetails from "@/components/UI/PowerSupplyCardDetails";
import { useRouter } from "next/router";

const PowersupplyPages = ({ PowersupplyProduct }) => {
  const router = useRouter();
  const powersupplyId = router.query.powersupplyId;
  return (
    <>
      <div className="mt-11">
        <PowerSupplyCardDetails PowersupplyProduct={PowersupplyProduct}>
          {powersupplyId}
        </PowerSupplyCardDetails>
      </div>
    </>
  );
};

export default PowersupplyPages;
PowersupplyPages.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://technet-server-pappuparvez1112.vercel.app/products/${params?.powersupplyId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      PowersupplyProduct: data,
    },
  };
}
