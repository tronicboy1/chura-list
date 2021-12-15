import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push } from "firebase/database";

import firebaseApp from "../services/firebase";

import ListModel from "../models/list-model";
import ListItemModel from "../models/list-item-model";

type AddItemFunction = (newItem: ListItemModel) => void;

type ReturnObject = {
  data: ListModel;
  errors: {} | null;
  addItem: AddItemFunction;
};

const useFirebase: (path: string) => ReturnObject = (path) => {
  const [data, setData] = useState<ListModel>({});
  const [errors, setErrors] = useState<{} | null>(null);

  //logic for connecting to reference point in RealtimeDB
  useEffect(() => {
    //connect to app database with config settings
    const database = getDatabase(firebaseApp);

    //define what area of the database you want to access
    const pathRef = ref(database, path);
    onValue(
      pathRef,
      (snapshot) => {
        //send new data to react with setData every time information changed on realtime db
        const newData = snapshot.val();
        if (newData === null) {
          setData({});
        } else {
          setData(newData);
        }
      },
      (error) => {
        setErrors(error);
      }
    );
  }, [path]);

  //logic to add new entrie to RealtimeDB
  const addItem: AddItemFunction = (newItem) => {
    const database = getDatabase(firebaseApp);
    const pathRef = ref(database, path);
    push(pathRef, newItem);
  }

  return {
    data,
    errors,
    addItem
  };
};

export default useFirebase;