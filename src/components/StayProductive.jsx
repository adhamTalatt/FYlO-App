export default function StayProductive() {
  return (
    <section>
      <div className=" container text-white grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center my-[150px] ">
        <div>
          <img
            src={"./images/illustration-stay-productive.png"}
            alt="stay-productive"
          />
        </div>
        <div className=" text-center md:text-left">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className=" mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              aspernatur praesentium molestias, officia ullam itaque quaerat,
              placeat adipisci!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              aspernatur praesentium molestias, officia ullam itaque quaerat,
              placeat adipisci!
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <a
              href="/"
              className=" text-primary   hover:text-[#42b0d1] flex items-center gap-[15px] w-fit border-b-2 border-primary border-solid pb-[5px] transition-colors duration-200"
            >
              See how Fylo works
              <img
                src="./images/icon-arrow.svg"
                alt="icon-arrow"
                className=" w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
