import RootLayout from "@/components/Layouts/RootLayout";

const CheckoutPage = () => {
  return (
    <div>
      <h1>welcome</h1>
    </div>
  );
};

export default CheckoutPage;
CheckoutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
