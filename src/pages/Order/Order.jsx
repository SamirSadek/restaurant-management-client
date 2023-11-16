import { useState } from "react";
import orderImg from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import TabOrder from "./TabOrder";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {

    const categories = ['salads','pizzas','soups','desserts','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)


    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drink = menu.filter(item => item.category === 'drinks')


  return (
    <div>
        <Helmet>
        <title>Welcome || Order Food</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={orderImg} title="Order Food"></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salads</Tab>
        <Tab>Pizzas</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
        
      </TabList>
      <TabPanel>
        <TabOrder
        item={salad}></TabOrder>
      </TabPanel>
      <TabPanel>
      <TabOrder
        item={pizza}></TabOrder>
      </TabPanel>
      <TabPanel>
      <TabOrder
        item={soup}></TabOrder>
      </TabPanel>
      <TabPanel>
      <TabOrder
        item={dessert}></TabOrder>
      </TabPanel>
      <TabPanel>
      <TabOrder
        item={drink}></TabOrder>
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
