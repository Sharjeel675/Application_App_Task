import Link from "next/link";
import React from "react";
import icon from "../Icons/Search.png";
import Image from "next/image";
import img2 from "../img/download.png";
import icon2 from "../Icons/PrimeNG Icons v5.0.0 (1).svg";
import icon3 from "../Icons/PrimeNG Icons v5.0.0 (5).svg";
import img3 from "../img/Ellipse 63.svg";
import img4 from "../img/Ellipse 64.svg";
import img5 from "../img/Rectangle 336.svg";
import img6 from "../img/Rectangle 337.svg";
import img7 from "../img/Rectangle 338.png";
import img8 from "../img/Rectangle 339.svg";
import img9 from "../img/Ellipse 2.svg";
import img10 from "../Icons/PrimeNG Icons v5.0.0ab.png";
import img11 from "../Icons/PrimeNG Icons v5.0.0 (2)bb.svg";


const User = () => {
  return (
    <div>
      {/* Left-Side */}

      {/* Right-Side */}
      <div>
        <div className="pt-7 pb-7 pr-20  flex align-top justify-between">
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
        {/* Box-Portion */}

        <a className="underline underline-offset-8 decoration-rose-500 pl-10 "> Recent Users</a>
        <div className="flex justify-evenly">
          <div className="flex display justify-evenly  gap-x-8 gap-y-4 grid-cols-3 mt-4">
            <div className=" h-40 w-32 p-4  bg-gray-100 rounded-md border-3">
              <Image
                className="h-26 w-26  flex justify-center items-center box-border"
                src={img5}
                alt="img"
              />
              <h1 className="font-bold text-xs pt-2 px-2">Mitchel Fred</h1>
            </div>

            <div className="box-border h-40 w-32 p-4 bg-gray-100 rounded-md border-3 ">
              <Image
                className="h-26 w-26  flex justify-center items-center box-border"
                src={img6}
                alt="img"
              />
              <h1 className="font-bold text-xs pt-2 px-2">Mitchel Fred</h1>
            </div>

            <div className="h-40 w-32 p-4  bg-gray-100 rounded-md border-3 ">
              <Image
                className="h-26 w-26  flex justify-center items-center box-border"
                src={img7}
                alt="img"
              />
              <h1 className="font-bold text-xs pt-2 ">Martha james</h1>
            </div>

            <div className="h-40 w-32 p-4  bg-gray-100 rounded-md border-3">
              <Image
                className="h-26 w-26  flex justify-center items-center box-border"
                src={img8}
                alt="img"
              />
              <h1 className="font-bold text-xs pt-2 px-2">Monika Joe</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {" "}
            <div>
              <a className="underline underline-offset-8 decoration-rose-500 ">Notification</a>
              <div className="flex gap-2 mt-4">
                <div className="flex display-flex">
                  <Image src={img10} alt="" />
                  Monday 20 Feb
                </div>
                <div className="flex display-flex">
                  <Image src={img11} alt="" />
                  11 : 20
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="box-border h-5 w-60 p-4 items-center rounded-md border-3 bg-gray-100 flex justify-between ">
                <div className="flex justify-between space-x-14">
                  <div className="flex justify-evenly pt-2">
                    <Image
                      className="h-10 w-10 rounded-full flex justify-center items-center"
                      src={img3}
                      alt="img"
                    />
                    <a className="pt-1">Corey Torff</a>
                  </div>

                  <Image src={icon3} alt="icon" />
                </div>
              </div>

              <div className="box-border h-5 w-60 p-4 items-center rounded-md border-3 bg-gray-100 flex justify-between ">
                <div className="flex justify-between space-x-14">
                  <div className="flex justify-evenly pt-2">
                    <Image
                      className="h-10 w-10 rounded-full flex justify-center items-center"
                      src={img4}
                      alt="img"
                    />
                    <a className="pt-1">Corey Torff</a>
                  </div>

                  <Image src={icon3} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Data-Portion */}

      <div className="box-border  w-full p-4 rounded-md border-3 bg-gray-100 mt-4  ">
        <div className="flex display-flex justify-evenly ">
          <a>Name</a>
          <a>Name</a>
          <a>Name</a>
          <a>Name</a>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default User;
