import { GiShoppingBag } from "react-icons/gi";
import { GiShoppingCart } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { FaBolt } from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-800">
            <div className="flex justify-between items-center">
              <div className=" flex justify-items-center items-center gap-2">
                {/* Shopping Bag logo */}
                <GiShoppingBag className="w-6 h-6 text-pink-300 hover:text-sky-400" />

                {/* logo  */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block "
                    placeholder="Search for product. "
                  />

                  <GoSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex justify-center items-center gap-2">
                <FaBolt className="w-5 h-5 text-amber-700 hidden lg:block md:block" />
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it with
                </p>
                <span className="text-amber-500">12 hour</span>

                {/*Cart Icon */}
                <GiShoppingCart className="w-8 h-8 text-sky-400 rounded-full p-1 relative hover:text-amber-500" />

                <Image
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-500 "
                  src="https://i.pinimg.com/736x/86/72/05/8672059aade81a13b52c9722344f8b56.jpg"
                  alt="user"
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}