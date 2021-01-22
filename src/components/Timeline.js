import Item from "./Item";
import data from "../data";

const Timeline = () => {
  const timeline = data.map((item) => <Item key={item.id} item={item} />);

  return <> {timeline} </>;
};

export default Timeline;
