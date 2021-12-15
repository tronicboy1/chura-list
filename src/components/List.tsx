import React from "react";
import ListItem from "./UI/ListItem";
import ListModel from "../models/list-model";
import Card from "./UI/Card";

const List: React.FC<{ data: ListModel }> = ({ data }) => {
  return (
    <Card>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {Object.entries(data).map(([key, item]) => (
          <ListItem key={key} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default List;
