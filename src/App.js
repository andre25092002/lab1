import React, { useState } from "react";
import cn from "classnames";
import { Tree } from "react-tree-graph";

import { persons, GENDERS, data } from "./constants";

import "react-tree-graph/dist/style.css";
import "./grapsh.css";

const buttonStyle =
  "p-2 m-2  border-2 border-gray-300 rounded-lg bg-transparent";

const App = () => {
  const [value, setValue] = useState([]);

  const handleClickFather = () => {
    const arr = [];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i]?.parents?.gen === GENDERS.MALE) {
        arr.push(persons[i].parents.name);
      }
    }
    setValue(arr);
  };

  const handleClickSon = () => {
    const arr = [];
    for (let i = 0; i < persons.length; i++) {
      if (persons[i]?.parents && persons[i].gen === GENDERS.MALE) {
        arr.push(persons[i].name);
      }
    }
    setValue(arr);
  };

  const handleClickCousin = () => {
    const arr = [];
    for (let i = 0; i < persons.length; i++) {
      for (let j = 0; j < persons[i]?.children?.length; j++) {
        if (
          persons[i]?.children?.length === 2 &&
          persons[i]?.children[j]?.gen !== GENDERS.MALE
        ) {
          arr.push(persons[i].children[j].children.name);
        }
      }
    }
    setValue(arr);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <button className={cn(buttonStyle)} onClick={() => handleClickFather()}>
          Father
        </button>
        <button className={cn(buttonStyle)} onClick={() => handleClickSon()}>
          Son
        </button>
        <button className={cn(buttonStyle)} onClick={() => handleClickCousin()}>
          Cousin
        </button>
      </div>
      <div className="flex gap-5">
        {value
          .filter(function (item, pos) {
            return value.indexOf(item) == pos;
          })
          .map((el) => (
            <div key={Math.random()}>{el}</div>
          ))}
      </div>
      <div className="mt-10">
        <Tree data={data} height={400} width={400} />
      </div>
    </div>
  );
};

export default App;
