import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import featured from "src/assets/images/images.jpg";
const AboutPage = () => {
  return (
    <div>
      <section className="features-service pb-0 pb-md-5 mt-12  ">
        <div className=" container mb-5">
          <div className=" flex row mb-5 ">
            <div className="col-md-7 mb-4 m-md-0">
              <Image
                className=" img-fluid align-middle mt-5"
                src={featured}
                width={300}
                height={200}
                alt={"pic"}
              ></Image>
            </div>
            <div className="col-md-5 items-center  ml-20">
              <h1>About us</h1>
              <p className="text-secondary my-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                efacere amet aperiam non odio. Temporibus, nemo quasi quisquam
                ipsa distinctio saepe sed veniam incidunt, tempora mollitia,
                dignissimos repellendus expedita. Obcaecati minima, reiciendis
                optio aspernatur autem pariatur soluta illum velit, eligendi
                dolorem consequuntur sapiente rerum accusamus aut nulla
                praesentium! Neque autem animi, voluptatem magnam nesciunt
                officia nemo nam, delectus minima velit beatae iste praesentium
                ad repudiandae, similique excepturi sapiente.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
