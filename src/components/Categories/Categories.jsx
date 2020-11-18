import React from 'react';

// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };

//   SelectedItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickR } = this.props;
//     return (
//       <div>
//         <div className="categories">
//           <ul>
//             {items.map((pars, index) => (
//               <li
//                 className={this.state.activeItem === index ? 'active' : ''}
//                 onClick={() => this.SelectedItem(index)}
//                 key={index}>
//                 {pars}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
const Categories = (props) => {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
            Все
          </li>
          {props.items.map((pars, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => setActiveItem(index)}
              key={index}>
              {pars}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
