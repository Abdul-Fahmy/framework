import styles from "./portfolio.module.css";
import firstImage from "../../assets/poert1.png";
import secondImage from "../../assets/port2.png";
import thirdImage from "../../assets/port3.png";
import { useState } from "react";

export default function Portfolio() {
  let [image, setImage] = useState(null);
  let [show, setShow] = useState("hidden");
  return (
    <>
      <div className={`${styles.portfolio} relative`}>
        <div className="container">
          <h2 className="text-center text-2xl md:text-5xl font-bold uppercase my-6 text-secondary-900">
            portfolio component
          </h2>
          <div className="flex justify-center items-center">
            <div className="relative before:absolute before:h-1 before:bg-secondary-900 before:left-10 before:top-1/2 before:w-24"></div>
            <i className="fa-solid fa-star text-secondary-900"></i>
            <div className="relative before:absolute before:h-1 before:bg-secondary-900 before:-left-36 before:top-1/2 before:w-24"></div>
          </div>

          <div className="cards flex flex-col md:flex-row md:flex-wrap ">
            <div className="inner md:w-1/3 p-8">
              <div className="card group relative  rounded-lg overflow-hidden cursor-pointer ">
                <div
                  onClick={function (e) {
                    let source =
                      e.target.nextElementSibling.getAttribute("src");

                    setImage(source);
                    setShow("flex");
                  }}
                  className="layer absolute bg-primary-900 flex justify-center items-center opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-95 group-hover:top-0 group-hover:left-0  "
                >
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
                <img className="w-full" src={firstImage} alt="" />
              </div>
            </div>
            <div className="inner md:w-1/3 p-8">
              <div className="card group relative  rounded-lg overflow-hidden cursor-pointer ">
                <div
                  onClick={function (e) {
                    let source =
                      e.target.nextElementSibling.getAttribute("src");

                    setImage(source);
                    setShow("flex");
                  }}
                  className="layer absolute bg-primary-900 flex justify-center items-center opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-95 group-hover:top-0 group-hover:left-0  "
                >
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
                <img className="w-full" src={secondImage} alt="" />
              </div>
            </div>
            <div className="inner md:w-1/3 p-8">
              <div className="card group relative  rounded-lg overflow-hidden cursor-pointer ">
                <div
                  onClick={function (e) {
                    let source =
                      e.target.nextElementSibling.getAttribute("src");

                    setImage(source);
                    setShow("flex");
                  }}
                  className="layer absolute bg-primary-900 flex justify-center items-center opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-95 group-hover:top-0 group-hover:left-0  "
                >
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
                <img className="w-full" src={thirdImage} alt="" />
              </div>
            </div>
            <div className="inner md:w-1/3 p-8">
              <div className="card group relative  rounded-lg overflow-hidden cursor-pointer ">
                <div
                  onClick={function (e) {
                    let source =
                      e.target.nextElementSibling.getAttribute("src");

                    setImage(source);
                    setShow("flex");
                  }}
                  className="layer absolute bg-primary-900 flex justify-center items-center opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-95 group-hover:top-0 group-hover:left-0  "
                >
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
                <img className="w-full" src={firstImage} alt="" />
              </div>
            </div>
            <div className="inner md:w-1/3 p-8">
              <div className="card group relative  rounded-lg overflow-hidden cursor-pointer ">
                <div
                  onClick={function (e) {
                    let source =
                      e.target.nextElementSibling.getAttribute("src");

                    setImage(source);
                    setShow("flex");
                  }}
                  className="layer absolute bg-primary-900 flex justify-center items-center opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-95 group-hover:top-0 group-hover:left-0  "
                >
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
                <img className="w-full" src={secondImage} alt="" />
              </div>
            </div>
            <div className="inner md:w-1/3 p-8">
              <div className="card group relative  rounded-lg overflow-hidden cursor-pointer ">
                <div
                  onClick={function (e) {
                    let source =
                      e.target.nextElementSibling.getAttribute("src");

                    setImage(source);
                    setShow("flex");
                  }}
                  className="layer absolute bg-primary-900 flex justify-center items-center opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-95 group-hover:top-0 group-hover:left-0  "
                >
                  <i className="fa-solid fa-plus text-white text-7xl"></i>
                </div>
                <img className="w-full" src={thirdImage} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`my-model ${show} absolute top-0 left-0 w-full h-full bg-blue-400 bg-opacity-30   justify-center items-center`}
          onClick={() => {
            setShow("hidden");
          }}
        >
          <img
            src={`${image}`}
            className="md:w-2/4 md:h-2/4 object-contain "
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      </div>
    </>
  );
}
