export default function TestimonialsBox({ desc, img, position, name }) {
  return (
    <div>
      <div className="text-white bg-[#21293c]  rounded-[5px] p-[30px] shadow-[4px_4px_1px_4px_#1c202c]">
        <di>{desc}</di>
        <div className=" flex mt-[20px]">
          <img
            src={`/src/assets/images/${img}`}
            className=" w-[50px] h-[50px] rounded-full object-contain mr-[10px]"
            alt=""
          />
          <div className="">
            <h3 className=" font-bold">{name}</h3>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
