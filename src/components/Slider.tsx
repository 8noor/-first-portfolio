import Image from "next/image";
import React from "react";

export default function Slider() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-tr from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  src="https://aishanaheed.com/wp-content/uploads/omj8224.jpg"
                  alt="Product 1"
                  width={12}
                  height={12}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Classic Shirts
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-700">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <Image
                  src="https://media.istockphoto.com/id/458689475/photo/rolex-shop-window.jpg?s=612x612&w=0&k=20&c=NvaJNm-W0YUEI8ft7EW7M93_9_ciGQxH-RgBTM4z13k="
                  alt="Product 2"
                  width={12}
                  height={12}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Luxury Watch
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://www.ansabjahangirstudio.com/images/thumbs/0009909_inara.jpeg"
                    alt="Product 3"
                    width={12}
                    height={12}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                    Color: Teal Blue Fabric: Raw Silk
                  </h3>
                </a>

                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    src="https://www.sugarandspice.com.au/cdn/shop/articles/lozsta._Budget-Friendly_Wedding_Dresses_How_to_Look_Stunning_Wi_f60c838c-810f-4fc6-b3cf-db1da76363aa_1024x1024.png?v=1723525376"
                    alt="Product 4"
                    width={12}
                    height={12}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                    Dress
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-gradient-to-r from-black to-gray-700 h-auto md:h-full flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 w-full h-full"
              >
                <Image
                  src="https://www.ansabjahangirstudio.com/images/thumbs/0010767_bano.jpeg"
                  alt="Product 5"
                  width={12}
                  height={12}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/15"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-xl">
                  Color: White
                  <br />
                  Fabric: Organza
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
