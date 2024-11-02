"use client";
import { Input } from "postcss";
import Checkbox from "./Checkbox.js";
import React from "react";

const onKeyDown = (e) => {
  if (e.key == "Enter") {
    console.log("You hit enter.");
  }
};

// i know the math.random is a goofy solution
function Todoitem(props) {
  return (
    <div className="align-center flex items-center justify-center">
      <Checkbox
        title="this is the title of a todo"
        id={Math.floor(Math.random() * 100000)}
      />
      <input
        id={Math.floor(Math.random() * 100000)}
        type="text"
        placeholder="insert todo here"
        className="ml-2 bg-transparent text-white outline-none"
        onKeyDown={(e) => {
          onKeyDown(e);
        }}
      ></input>
    </div>
  );
}

export default function Todobox(props) {
  return (
    <div className="m-10 mx-auto mb-5 w-full rounded-lg border-2 border-white border-opacity-20 p-5 portrait:mb-0 portrait:mt-5 portrait:rounded-md">
      <div
        id="todobox"
        className="align-center flex h-auto w-auto items-center justify-center text-white"
      >
        <div
          className="align-center mx-auto w-auto flex-col items-center justify-center"
        >
          <Todoitem />
          <br />
          <Todoitem />
          <br />
          <Todoitem />
        </div>
        <div className="align-center mx-auto w-auto flex-col items-center justify-center">
          <Todoitem />
          <br />
          <Todoitem />
          <br />
          <Todoitem />
        </div>
        <div className="align-center mx-auto w-auto flex-col items-center justify-center portrait:hidden">
          <Todoitem />
          <br />
          <Todoitem />
          <br />
          <Todoitem />
        </div>
      </div>
    </div>
  );
}
