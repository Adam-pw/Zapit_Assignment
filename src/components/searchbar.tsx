import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function Searchbar({ ...rest }) {
  console.log({ ...rest });
  return (
    <>
      <main>
        <div className="border border-black m-5 mx-4 p-6 md:flex-row gap-5 justify-between flex items-center flex-col">
          <div className="">
            Serach : <input type="text" className="w-max border border-black" {...rest} />
          </div>
          <button className="p-4 bg-blue-400 text-white md:ml-6 rounded-lg md:w-1/6 w-4/6">
            Filters
          </button>
        </div>
      </main>
    </>
  );
}
