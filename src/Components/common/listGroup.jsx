import ListGroup from "react-bootstrap/ListGroup";

function ActiveExample(props) {
  const { items, textProperity, valueProperity, selectedItem, onItemSelect } =
    props;
  return (
    <ListGroup
      style={{ cursor: "pointer", marginTop: "48px" }}
      className=" ml-10 "
      as="ul"
    >
      {items.map((item) => (
        <ListGroup.Item
          onClick={() => onItemSelect(item)}
          key={item[valueProperity]}
          as="li"
          className={`d-flex justify-content-center ${
            item === selectedItem ? "active" : ""
          }`}
        >
          {item[textProperity]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
ActiveExample.defaultProps = {
  textProperity: "name",
  valueProperity: "_id",
};
export default ActiveExample;
