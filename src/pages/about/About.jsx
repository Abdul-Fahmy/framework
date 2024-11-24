import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <div
        className={`${styles.about} flex  justify-center items-center bg-primary-900 text-white`}
      >
        <div className="container flex flex-col  justify-center items-center gap-10 ">
          <h2 className="text-center text-2xl md:text-5xl font-bold uppercase ">
            about component
          </h2>
          <div className="flex justify-center items-center">
            <div className="relative before:absolute before:h-1 before:bg-white before:left-10 before:top-1/2 before:w-24"></div>
            <i className="fa-solid fa-star "></i>
            <div className="relative before:absolute before:h-1 before:bg-white before:-left-36 before:top-1/2 before:w-24"></div>
          </div>
          <div className="desc flex flex-col md:flex-row justify-center items-center gap-6 px-4">
            <div className="desc-1">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="desc-1">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
