const DishesListItemComponent = ({ el }) => {
  return (
    <div>
      <div>
        <img src={el.photo_path} alt={el.photo_path} />
      </div>
      <div>
        {el.title} {el.description}/{el.recipe}
      </div>
    </div>
  );
};

export default DishesListItemComponent;
