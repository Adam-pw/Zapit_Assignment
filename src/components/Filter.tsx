import { useState } from "react";

interface FilterProps {
  props: any;
  onClick: (e: any) => void;
  handleChange: (e: any) => void;
}

export default function Filter({ props, onClick, handleChange }: FilterProps) {
  return (
    <>
      <div className="border border-black m-5 mx-4 p-6 md:flex-row gap-5 justify-between flex items-center flex-col">
        <div className="">
          <form>
            <label>Select Categories </label>
            <select onChange={handleChange}>
              {props?.map((data: any, index: any) => {
                return (
                  <>
                    <option value={data.id} key={index}>
                      {data.name}
                    </option>
                  </>
                );
              })}
            </select>
          </form>
        </div>
        <button
          className="p-4 bg-blue-400 text-white md:ml-6 rounded-lg md:w-1/6 w-4/6"
          onClick={onClick}
        >
          Filters
        </button>
      </div>
    </>
  );
}
