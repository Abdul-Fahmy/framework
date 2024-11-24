import avatar from "../../assets/avataaars.svg";
import style from "./home.module.css";
export default function Home() {
  return (
    <>
      <div
        className={`${style.home} bg-primary-900 flex justify-center items-center`}
      >
        <div className="container py-24 flex justify-center items-center flex-col text-white">
          <div className="image w-1/4 h-1/4">
            <img className="w-full" src={avatar} alt="" />
          </div>

          <h2 className="my-6 text-4xl font-bold uppercase ">
            start Framework
          </h2>
          <div className="flex justify-center items-center mb-6">
            <div className="relative before:absolute before:h-1 before:bg-white before:left-10 before:top-1/2 before:w-24"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="relative before:absolute before:h-1 before:bg-white before:-left-36 before:top-1/2 before:w-24"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
