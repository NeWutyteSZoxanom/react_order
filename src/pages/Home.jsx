import React from 'react';
import Categories from '../components/Categories/Categories';
import SortPopup from '../components/SortPopup/SortPopup';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
const Home = (props) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickR={(pars) => console.log(pars)}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />

        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {props.items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Home;
