import React from 'react'
import { Link } from "react-router-dom";

export default function Section() {


  return (
    <div>
      <section className=" text-gray-400 bg-[#e5e5e557] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="mt-10 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900">
              Read This Section
              <br className="hidden lg:inline-block" />
              Before Buy anything
            </h1>
            <p className="mb-8 leading-relaxed">
            When it comes to furnishing your home, finding the perfect furniture that is both stylish and functional is one of the best parts about owning a home. You can let your inner interior designer flourish sorting through all the decoration options, deciding on how to blend colors, patterns, and materials. With such variety in home furniture, it's important to know the differences between these styles and materials so you can find what works best for you. For instance, will Victorian furniture fit in with your design if you want to create a vibrant room with bright colors and contrasting highlights? Or does it make more sense to use a brighter theme and utilize coastal furniture to accomplish your goals? We'll try to go over all these details here so you can get on your way to finding the best home furniture for you.
            </p>
            <div className="flex justify-center">
              <Link
                to="./Products"
                className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded text-lg"
              >
                Shopping Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
