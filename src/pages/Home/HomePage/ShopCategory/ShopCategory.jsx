import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {
     const [categoryName, setCategoryName] = useState('')
     



     const categoryTab = ["horse", "dinosaur", "cat"]

     return (
          <div className="my-10">
               <h2 className='text-5xl text-center font-bold'>Shop By Category</h2>

               <div className="text-center py-10">
               <Tabs className=''>
    <TabList className='flex justify-center'>
          {
               categoryTab.map((ctb, index) => <Tab
               key={index}
               onClick={() => setCategoryName(ctb)}
               >{ctb}</Tab>)
          }
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
               </div>
          </div>
     );
};

export default ShopCategory;