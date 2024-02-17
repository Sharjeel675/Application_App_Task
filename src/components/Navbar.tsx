import React from "react";
import Image from "next/image";
import img9 from "../img/Ellipse 2.svg";
import icons4 from "../Icons/PrimeNG Icons v5.0.0 (3).svg";
import icons5 from "../Icons/PrimeNG Icons v5.0.0 (6).svg";
import icons6 from "../Icons/msg.png";
import icons7 from "../Icons/las.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-blue-600">
          hamid
        </Link>
        <Link href={"/Notificaion"} className="mr-5 hover:text-blue-600">
          Notification
        </Link>
        <Link href={"/Message"} className="mr-5 hover:text-blue-600">
          Message
        </Link>
        <Link href={"/User Management"} className="mr-5 hover:text-blue-600">
          User Management
        </Link>
      </nav> */}

      <div className="bg-gradient-to-br from-pink-600  to-amber-500  w-1/5 h-dvh float-left">
        {/* Left-Upper-Portion */}
        <div className="flex display-flex items-center mt-8">
          <div>
            <Image src={img9} alt="" />
          </div>
          <div>
            <p className="text-white text-sm">Admin</p>
            <h1 className="text-white">Corey Torff</h1>
          </div>
        </div>
        {/* Left Down-Portion */}

        <div className="mt-14">
          <div id="menu" className="flex flex-col space-y-2">
            <a
              href=""
              className="text-sm font-medium  py-2 px-2 hover:bg-slate-50 text-blackh-32 w-40 p-4 bg-gray-100 border-3 hover:text-black hover:text-base rounded-md transition duration-150 ease-in-out flex"
            >
              <Image src={icons4} alt="icon" />
              <Link href={"/Users"}>
                <span className="px-2 items-center mr-5 hover:text-blue-600">
                  User
                </span>
              </Link>
            </a>
            <a
              href=""
              className="text-sm font-medium py-2 px-2 hover:bg-slate-50 text-white hover:text-black hover:scale-105 rounded-md transition duration-150 ease-in-out flex"
            >
              <Image src={icons5} alt="icon" />
              <Link href={"/Notification"}>
                {" "}
                <span className="px-2 items-center mr-5 hover:text-blue-600">
                  Notification
                </span>
              </Link>
            </a>
            <a
              href=""
              className="text-sm font-medium py-2 px-2 hover:bg-slate-50 text-white hover:text-black hover:scale-105 rounded-md transition duration-150 ease-in-out flex"
            >
              <Image src={icons6} alt="icon" />

              <Link href={"/Message"}>
                {" "}
                <span className="px-2 ">Message</span>
              </Link>
            </a>
            <a
              href=""
              className="text-sm font-medium py-2 px-2 hover:bg-slate-50 text-white hover:text-black hover:scale-105 rounded-md transition duration-150 ease-in-out flex"
            >
              <Image src={icons7} alt="icon" />
              <Link href={"/User_Management"}>
                <span className="px-2 ">User Management</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
