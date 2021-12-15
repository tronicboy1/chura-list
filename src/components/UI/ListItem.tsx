import React from "react";
import ListItemModel from "../../models/list-item-model";

import styles from "./ListItem.module.css";

const ListItem: React.FC<{ item: ListItemModel }> = ({ item }) => {
  return (
    <li className={styles.li}>
      <h3>{item.title}</h3>
      <p>{item.contents}</p>
      <p>{new Date(item.createdAt).toLocaleDateString()}</p>
    </li>
  );
};

export default ListItem;