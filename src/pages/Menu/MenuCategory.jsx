import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem";

const MenuCategory = ({ items, title,coverImg }) => {
  return (
    <div className="my-10">
      {title && <Cover img={coverImg} title={title}></Cover>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className=" uppercase border-0 py-2 px-5 rounded border-black my-10 border-b-4  hover:bg-base-200">ORDER YOUR FAVOURITE FOOD</button>
      </Link>

    </div>
  );
};

export default MenuCategory;
