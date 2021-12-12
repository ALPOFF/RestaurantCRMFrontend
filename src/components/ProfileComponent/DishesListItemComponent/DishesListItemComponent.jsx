import "./DishesListItemComponent.css";

const DishesListItemComponent = ({ el }) => {
  return (
    <div className="dish-item">
      <div>
        <img src={el.photo} alt={el.photo} height={100} />
      </div>
      <div className="dish-item__descr">
        <h4>{el.title}</h4>
        <div>
          {el.description}/{el.recipe}
        </div>
      </div>
    </div>
  );
};

export default DishesListItemComponent;
