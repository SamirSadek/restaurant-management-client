import FoodCard from "../../components/FoodCard";

const TabOrder = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {item.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default TabOrder;
