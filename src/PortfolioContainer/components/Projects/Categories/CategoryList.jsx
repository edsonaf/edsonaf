import "./CategoryList.scss";

const CategoryList = (props) => {
  return (
    <li
      className={props.active ? "categoryList active" : "categoryList"}
      onClick={() => props.setSelected(props.id)}>
      {props.title}
    </li>
  );
};

export default CategoryList;
