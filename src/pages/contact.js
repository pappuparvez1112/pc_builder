import RootLayout from "@/components/Layouts/RootLayout";

const ContactPage = () => {
  return (
    <div>
      <h1>contact is cooking</h1>
    </div>
  );
};

export default ContactPage;
ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
