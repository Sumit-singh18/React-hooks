import React from "react";
import DataContxt from "./DataContxt";

const DataState = (props) => {
const State = {
  'name':'Sumit',
  'Roll': 195
}

  return (
    <>
      <DataContxt.Provider value={State}>
        {props.children}
        </DataContxt.Provider>
    </>
  );
};

export default DataState;
