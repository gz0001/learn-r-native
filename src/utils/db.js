import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({ name: "mydb.db", createFromLocation: "~mydb.db" });

export const select = (query, args = null) => {
  const params = args ? [args] : [];

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        query,
        params,
        (tx, results) => {
          console.log("tx: ", tx);
          resolve(results);
        },
        (tx, error) => {
          console.log("tx: ", tx);

          reject(error);
        }
      );
    });
  });
};

export const exec = (query, args = null) => {
  const params = args ? [args] : [];

  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        query,
        params,
        (tx, results) => {
          console.log("tx: ", tx);
          resolve(results);
        },
        (tx, error) => {
          console.log("tx: ", tx);
          reject(error);
        }
      );
    });
  });
};
