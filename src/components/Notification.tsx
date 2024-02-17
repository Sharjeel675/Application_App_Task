import React from "react";
import Image from "next/image";
import icon from "../Icons/Search.png";
import icon2 from "../Icons/PrimeNG Icons v5.0.0 (1).svg";
import icon3 from "../Icons/PrimeNG Icons v5.0.0 (5).svg";
import img2 from "../img/download.png";
import img10 from "../Icons/PrimeNG Icons v5.0.0ab.png";
import img11 from "../Icons/PrimeNG Icons v5.0.0 (2)bb.svg";
const Notification = () => {
  return (
    <div>
      {/* Right-Side */}
      <div>
        <div className="pt-7 pb-3 pr-20  flex align-top justify-between">
          <div className="search-bar flex px-4 items-center  border-gray-100 rounded-md  bg-gray-100  mx-10 w-1/3 h-45  ">
            <Image src={icon} alt="" />
            <input type="text" placeholder="Search User" className="px-4" />
          </div>
          <div className=" flex justify-end  items-center">
            <Image src={icon2} alt="icon" />
            <Image src={icon3} alt="icon" />
            <Image
              className="h-10 w-10 rounded-full flex justify-center items-center"
              src={img2}
              alt="img"
            />
          </div>
        </div>

        {/* Notification Section */}
        <div>
          <div className="">
            <a className="underline underline-offset-8 decoration-rose-500 pl-10 ">
              Notifications
            </a>
          </div>
          <div>
            <div className="mt-5">
              <a className="text-red-500 pl-10 ">New</a>
            </div>
            <div className="flex text-gray-500 pt-3 pb-3 pr-20 align-top justify-between">
              <a className="underline underline-offset-8 pl-10 ">
                lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
              </a>

              <div className="flex ">
                <Image src={img10} alt="" />
                11 : 20
              </div>
            </div>

            <div className="flex pt-3 pb-3 pr-20 text-gray-500 align-top justify-between">
              <a className="underline underline-offset-8 pl-10 ">
                lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
              </a>

              <div className="flex ">
                <Image src={img10} alt="" />
                11 : 20
              </div>
            </div>
          </div>

          <div className="">
            <a className="text-red-500 pl-10 ">Yesterday</a>
          </div>
          <div className="flex text-gray-500 pt-3 pb-3 pr-20 align-top justify-between">
            <a className="underline underline-offset-8 pl-10 ">
              lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
            </a>

            <div className="flex ">
              <Image src={img10} alt="" />
              11 : 20
            </div>
          </div>

          <div className="flex pt-1 pb-3 pr-20 text-gray-500 align-top justify-between">
            <a className="underline underline-offset-8 pl-10 ">
              lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
            </a>

            <div className="flex ">
              <Image src={img10} alt="" />
              11 : 20
            </div>
          </div>

          <div className="flex pt-1 pb-3 pr-20 text-gray-500 align-top justify-between">
            <a className="underline underline-offset-8 pl-10 ">
              lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
            </a>

            <div className="flex ">
              <Image src={img10} alt="" />
              11 : 20
            </div>
          </div>
        </div>

        <div>
          <div className="mt-5">
            <a className="text-red-500 pl-10 ">4 Apr,2023</a>
          </div>
          <div className="flex text-gray-500 pt-2 pb-2 pr-20 align-top justify-between">
            <a className="underline underline-offset-8 pl-10 ">
              lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
            </a>

            <div className="flex ">
              <Image src={img10} alt="" />
              11 : 20
            </div>
          </div>

          <div className="flex pt-1 pb-7 pr-20 text-gray-500 align-top justify-between">
            <a className="underline underline-offset-8 pl-10 ">
              lorem ipsum dolor sit amet,ncvulputate libero et velit interdum
            </a>

            <div className="flex ">
              <Image src={img10} alt="" />
              11 : 20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
