export default function Searchbar({ ...rest }) {
  return (
    <>
      <main>
        <div className="border border-black m-5 mx-4 p-6 md:flex-row gap-5 justify-between flex items-center flex-col">
          <div className="">
            Serach :{" "}
            <input
              type="text"
              className="w-max border border-black"
              {...rest}
            />
          </div>
        </div>
      </main>
    </>
  );
}
