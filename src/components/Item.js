import { PageSection, TextCenter, ImageStyle } from "../styles";

const Item = (props) => {
  return (
    <PageSection>
      <ul>
        <TextCenter>
          <li>
            <ImageStyle src={props.item.image} alt={props.item.title} />
            <h4>{props.item.year}</h4>
            <h4>{props.item.title}</h4>
            <p>{props.item.description}</p>
          </li>
        </TextCenter>
      </ul>
    </PageSection>
  );
};

export default Item;
