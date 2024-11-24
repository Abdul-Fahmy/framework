import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <div className="container flex flex-col justify-center items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold uppercase my-6 text-secondary-900">
            conatct section
          </h2>
          <div className="flex justify-center items-center mb-10">
            <div className="relative before:absolute before:h-1 before:bg-secondary-900 before:left-10 before:top-1/2 before:w-24"></div>
            <i className="fa-solid fa-star text-secondary-900"></i>
            <div className="relative before:absolute before:h-1 before:bg-secondary-900 before:-left-36 before:top-1/2 before:w-24"></div>
          </div>
          <form className="space-y-10 w-3/4 mx-auto">
            <div className="name">
              <input
                className="w-full py-4 px-3 border-0 border-b rounded-lg focus:outline-0 "
                type="text"
                placeholder="userName"
              />
            </div>
            <div className="email">
              <input
                className="w-full py-4 px-3 border-0 border-b rounded-lg focus:outline-0 "
                type="email"
                placeholder="userEmail"
              />
            </div>
            <div className="age">
              <input
                className="w-full py-4 px-3 border-0 border-b rounded-lg focus:outline-0 "
                type="text"
                placeholder="userAge"
              />
            </div>
            <div className="password">
              <input
                className="w-full py-4 px-3 border-0 border-b rounded-lg focus:outline-0 "
                type="password"
                placeholder="userPassowrd"
              />
            </div>

            <button
              className="bg-primary-900 text-white px-4 py-2 rounded-md"
              type="submit"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
