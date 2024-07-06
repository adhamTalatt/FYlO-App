import TestimonialsBox from "./TestimonialsBox";

export default function Testimonials() {
  const testData = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio laborum perferendis aspernatur quod itaque qui dicta provident, sequi dolor dolorem, reprehenderit voluptatum! Ut asperiores debitis vero quidem in incidunt.",
      image: "profile-1.jpg",
      position: "Founder & CEO ,Huddle.",
      name: "Ahmed",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio laborum perferendis aspernatur quod itaque qui dicta provident, sequi dolor dolorem, reprehenderit voluptatum! Ut asperiores debitis vero quidem in incidunt.",
      image: "profile-2.jpg",
      position: "Founder & CEO ,Huddle.",
      name: "Amr",
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis optio laborum perferendis aspernatur quod itaque qui dicta provident, sequi dolor dolorem, reprehenderit voluptatum! Ut asperiores debitis vero quidem in incidunt.",
      image: "profile-2.jpg",
      position: "Founder & CEO ,Huddle.",
      name: "Eslam",
    },
  ];
  return (
    <section className="pb-[350px]">
      <div className=" container relative">
        <div className=" absolute left-[20px] md:left-0 top-[-35px] -z-10">
          <img src="./images/bg-quotes.png" alt="quotes" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] mx-[20px] md:mx-0">
          {testData.map((items, index) => {
            return (
              <TestimonialsBox
                key={index}
                desc={items.desc}
                img={items.image}
                position={items.position}
                name={items.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
