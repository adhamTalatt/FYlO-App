import { useState } from "react";
import FeatureBox from "./FeatureBox";

export default function Features() {
  const [items, setitmes] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: " Acces your files ,anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit explicabo eaque repellendus quis .",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaoration ",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit explicabo eaque repellendus quis .",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit explicabo eaque repellendus quis .",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit explicabo eaque repellendus quis .",
    },
  ]);
  return (
    <section id={"features"} className="pt-[150px]">
      <div className=" container ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[850px] mx-auto max-w-full">
          {items.map((e, index) => {
            return (
              <FeatureBox
                key={index}
                title={e.title}
                desc={e.desc}
                icon={e.icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
