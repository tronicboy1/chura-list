import React from "react";
import "./App.css";
import List from "./components/List";
import NewItem from "./components/NewItem";

import ListModel from "./models/list-model";

const App: React.FC = () => {
  const DUMMY_DATA: ListModel = {
    item1: {
      title: "Item 1 Title",
      contents: "Item 1 Contents",
      createdAt: new Date(),
    },
  };

  const addNewItem = (title: string, content: string) => {};

  return (
    <>
      <NewItem addNewItem={addNewItem} />
      <List data={DUMMY_DATA} />
    </>
  );
};

export default App;
