export default function ShowImage({ image, show }) {
  return (
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
  );
}
