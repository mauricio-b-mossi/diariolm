import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Email from "../public/emailLetter.jpg";
import Insta from "../public/instaBig.png";
import Link from 'next/link'
import Head from "next/head";

export default function contactUs() {
  return (
    <div>
      <Head>
        <title>Contact Us | Diario</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div
        id="figuresSVG"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <div className="text-5xl lg:text-7xl 2xl:text-9xl font-bold ">
          Contact Us
        </div>
        {/* <div className="text-3xl md:text-4xl ">Hi there.</div> */}
        <div className="text-lg md:text-xl lg:text-2xl font-light max-w-lg  text-center">
          {/* If you want to announce something like an event, CAS Project, or
          after-school -do not submit the form, email us directly. */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vero culpa doloribus voluptas dignissimos vel voluptates maiores nihil.
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-lg w-full">
          <Link href="mailto:mauricio.b.mossi@gmail.com">
            <a>
              <div className="flex flex-col justify-center items-center py-8 ">
                <Image src={Email} width="100" height="100" layout="fixed" />
                <p className="italic text-blue-700 hover:text-red-700">
                  mauricio.b.mossi@gmail.com
                </p>
              </div>
            </a>
          </Link>
          <Link href="https://www.instagram.com/m.mossi/">
            <a>
              <div className="flex flex-col justify-center items-center py-8 ">
                <Image src={Insta} width="100" height="100" layout="fixed" />
                <p className="italic text-blue-700 hover:text-red-700">
                  @m.mossi
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
