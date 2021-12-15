import React from "react";
import ListItemModel from "../../models/list-item-model";

import styles from "./ListItem.module.css";

const ListItem: React.FC<{ item: ListItemModel }> = ({ item }) => {
  return (
    <li className={styles.li}>
      <h3>{item.title}</h3>
      <p>{item.contents}</p>
      <p>{item.createdAt.toDateString()}</p>
    </li>
  );
};

export default ListItem;