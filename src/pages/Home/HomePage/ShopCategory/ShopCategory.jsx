import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";



const ShopCategory = () => {
     const [categoryName, setCategoryName] = useState('cats')
     const [categoryData, setCategoryData] = useState([])
     
     // console.log(categoryData)
     
     
     useEffect(()=>{
          fetch(`https://teddy-toy-server-saidur-way.vercel.app/products/category?subcategory=${categoryName}`)
          .then(res => res.json())
          .then(data =>{
               setCategoryData(data)
          })
     }, [categoryName])


     const categoryTab = [ "cats", "dinosaur", "horse"]

     return (
          <div className="my-10">
               <h2 className='text-5xl text-center font-bold'>Shop By Category</h2>

               <div className="text-center py-10">
               <Tabs className=''>
    <TabList>
         
          {
               categoryTab.map((ctb, index) => <Tab
               key={index}
               onClick={() => setCategoryName(ctb)}
               >{ctb}</Tab>)
          }
          
    </TabList>

    <TabPanel>
      <h2>Horse category</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {
          categoryData.map(category => <CategoryCard
          key={category._id}
          category={category}
          ></CategoryCard>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {
          categoryData.map(category => <CategoryCard
          key={category._id}
          category={category}
          ></CategoryCard>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      {
          categoryData.map(category => <CategoryCard
          key={category._id}
          category={category}
          ></CategoryCard>)
      }
      </div>
    </TabPanel>
  </Tabs>
               </div>
          </div>
     );
};

export default ShopCategory;