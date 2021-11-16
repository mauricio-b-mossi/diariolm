import React from 'react'
import NavBar from "../components/NavBar";
import Image from "next/image";
import Logo from '../public/logo.png'
import Head from 'next/head'


export default function about() {
    return (
      <div>
        <Head>
          <title>About | Diario</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavBar />
        {/* Main section */}

        <div id="figuresSVG" className="grid md:grid-cols-3 min-h-screen">
          <div className="md:col-span-3 min-h-screen grid md:grid-cols-3">
            <div className="flex justify-center items-center">
              <h1 className="font-serif text-3xl md:text-5xl ">About</h1>
            </div>
            <div className="flex justify-center items-center px-20 sm:px-28 md:px-0 lg:px-12 ">
              <Image src={Logo} responsive />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="font-serif text-3xl md:text-5xl italic ">About</h1>
            </div>
          </div>

          <div className="grid md:col-span-3 md:grid-cols-3 px-4 items-center justify-center min-h-screen">
            <div className="hidden md:block"></div>
            <div className="col-span-3 md:col-auto flex flex-col text-center max-w-sm md:max-w-none">
              <h1 className="font-serif text-3xl lg:text-5xl  py-4 border-b uppercase ">
                About us
              </h1>
              <div className="py-8 text-sm md:text-base  font-serif">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque fugiat labore vero at, perferendis et odit aut consequuntur aperiam aspernatur totam beatae autem maiores culpa, ea ad! Ex, sunt error!
                </p>
              </div>
            </div>
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            <div className="col-span-3 md:col-auto flex flex-col text-center max-w-sm md:max-w-none">
              <h1 className="font-serif text-3xl lg:text-5xl  py-4 border-b uppercase ">
                Mission Statement
              </h1>
              <div className="py-8 text-sm md:text-base  font-serif">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia adipisci nostrum aspernatur consectetur aliquam? Ut dolore accusamus optio natus excepturi dolor placeat fugiat explicabo, asperiores recusandae! Numquam perferendis voluptatum nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
}
