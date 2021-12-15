import React, { useRef } from "react";
import Card from "./UI/Card";

import styles from "./NewItem.module.css";

const NewItem: React.FC<{
  addNewItem: (title: string, contents: string) => void;
}> = ({ addNewItem }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentsRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (titleRef.current && contentsRef.current) {
      const title = titleRef.current.value;
      const contents = contentsRef.current.value;
      //send to App.tsx to update Firebase
      addNewItem(title, contents);
    }
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="contents">Contents</label>
          <input type="text" name="contents" ref={contentsRef} />
        </div>
        <button type="submit">Add</button>
      </form>
    </Card>
  );
};

export default NewItem;
