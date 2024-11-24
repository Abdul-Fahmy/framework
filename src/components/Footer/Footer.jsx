export default function Footer() {
  return (
    <>
      <footer className="bg-secondary-900 text-white py-20">
        <div className=" flex flex-col md:flex-row justify-between items-center   w-4/5 mx-auto gap-6">
          <div className="location flex flex-col md:w-1/3 ">
            <h3 className="uppercase font-bold mb-3 text-2xl">location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="social flex flex-col justify-center items-center md:w-1/3">
            <h3 className="font-bold mb-3 text-2xl">AROUND THE WEB</h3>
            <div className="icons flex  items-center">
              <div className="rounded-[50%] border-white border-2 mr-2">
                <i className="fa-brands fa-facebook p-3 "></i>
              </div>
              <div className="rounded-[50%] border-white border-2 mr-2">
                <i className="fa-brands fa-twitter p-3"></i>
              </div>

              <div className="rounded-[50%] border-white border-2 mr-2">
                <i className="fa-brands fa-linkedin-in p-3"></i>
              </div>

              <div className="rounded-[50%] border-white border-2 mr-2">
                <i className="fa-solid fa-globe p-3"></i>
              </div>
            </div>
          </div>
          <div className="freelance flex flex-col items-center md:w-1/3">
            <h3 className="font-bold mb-3 text-2xl">ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
      <p className="text-center py-5 bg-secondary-950 text-white">
        Copyright © Your Website 2021
      </p>
    </>
  );
}
