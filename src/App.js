import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './App.css';

const allCategories = ['All Dishes', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'All Dishes') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return  <main>
            <section className='menu-section'>
              <div className='title'>
                <h2> - Menu - </h2>
                <div className='underline'> </div>
              </div>
              <br/>
              <Categories categories={categories} 
                          filterItems={filterItems}/>
              <br/>
              <Menu items={menuItems}/>
            </section>
          </main>;
}

export default App;