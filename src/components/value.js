import React from "react";
import { useSelector } from "react-redux";

export default function Value() {
  const value = useSelector((state) => state.value);

  return (
    <div className='value'>
      <span>THE VALUE IS: {value}</span>
    </div>
  );
}
