import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularCategory = data.filter(
          (item) => item.category === "popular"
        );
        setMenu(popularCategory);
      });
  }, []);
  return (
    <section className="mb-10">
      <SectionTitle
        subHeading="Check it out"
        heading="From Our Menu"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center">
      <button className=" uppercase border-0 py-2 px-5 rounded border-b-4 mt-10 border-black  hover:bg-base-200">view full menu</button>

      </div>
    </section>
  );
};

export default PopularMenu;
