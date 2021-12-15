import React from "react";
import useFirebase from "./hooks/use-firebase";
import "./App.css";
import List from "./components/List";
import NewItem from "./components/NewItem";

const App: React.FC = () => {
  const { data, addItem } = useFirebase("List");

  const addNewItem = (title: string, contents: string) => {
    addItem({
      title,
      contents,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <>
      <NewItem addNewItem={addNewItem} />
      <List data={data} />
    </>
  );
};

export default App;
