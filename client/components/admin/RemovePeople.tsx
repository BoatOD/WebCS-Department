import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

type Props = {};

const RemovePeople = (props: Props) => {
  return (
    <>
      <button className="text-red-700 ">
        <HiOutlineTrash size={24}></HiOutlineTrash>
      </button>
    </>
  );
};

export default RemovePeople;
