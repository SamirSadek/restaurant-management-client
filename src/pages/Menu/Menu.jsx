import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')

  return (
    <div>
      <Helmet>
        <title>Welcome || Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={menuImg} title='our menu'></Cover>
      {/* main cover */}
      <SectionTitle
      subHeading="Don't Miss"
      heading="Todays's Offer"
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu item */}
      <MenuCategory
      items={dessert}
      title='desserts'
      coverImg={dessertImg}
      ></MenuCategory>


      <MenuCategory
      items={pizza}
      title='pizzas'
      coverImg={pizzaImg}
      ></MenuCategory>


      <MenuCategory
      items={salad}
      title='salads'
      coverImg={saladImg}
      ></MenuCategory>


      <MenuCategory
      items={soup}
      title='soups'
      coverImg={soupImg}
      ></MenuCategory>

      
    </div>
  );
};

export default Menu;
