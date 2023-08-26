import RootLayout from "@/components/Layouts/RootLayout";

import { Button } from "antd";

import Link from "next/link";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PcBuilderPage = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products, "filtered by rdeux cart");
  const handleAddProduct = () => {
    toast.success("🦄Build Successfully Complete!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10 text-primary">
        <div class="max-w-3xl w-full">
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    CPU
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/cpu">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    Motherboard
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/motherboard">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    Ram
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/ram">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    Power Supply
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/powersupply">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    Storage Device
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/storageDevice">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    Monitor
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/nonitor">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class=" shadow-md rounded my-6 border border-black-300">
            <table class="min-w-max w-full table-auto border border-black-300  bg-slate-500">
              <tbody class="text-gray-600 text-sm font-light flex justify-between items-center  hover:bg-slate-700 ">
                <tr class="border-b border-gray-200 hover:bg-slate-700">
                  <td class="py-3 px-6 text-left text-white font-serif font-semibold text-xl">
                    Mouse
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/mouse">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center">
                        ADD_TO_BUILD
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-lg w-full">
          <h1 className="mb-2">Pc Components</h1>
          <div className="bg-slate-400 border border-orange-600 rounded-md h-[60vh] p-10 flex flex-col">
            <div className="flex-grow  mb-2 space-y-2 overflow-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center bg-gray-100 p-1 rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={product?.image_url}
                      className="h-[82px] rounded-md mr-2"
                      alt=""
                    />
                    <div>
                      <h1 className="text-lg mb-2">name :{product?.name}</h1>
                      <p>Price: {product?.price}</p>
                      <p>Category: {product?.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Button onClick={handleAddProduct} className="w-full">
                Complete Build
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PcBuilderPage;
PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
