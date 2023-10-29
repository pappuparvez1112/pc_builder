import RootLayout from "@/components/Layouts/RootLayout";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("🦄Submit Successfully Done!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    // emailjs.sendForm(
    //   "service_cgarlkg",
    //   "template_de4rj1v",
    //   form.current,
    //   "b10vq3QhGyH1RI_qA"
    // );
    e.target.reset();
  };
  return (
    <div class="p-8 max-w-md ms-20 mt-20 bg-white rounded-xl shadow-md space-y-5">
      <h2 class="text-2xl font-semibold">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="text"
            id="email"
            name="email"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div class="mb-4">
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
