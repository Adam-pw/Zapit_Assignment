import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export default function MainPage({ crypto }: any, { ...rest }) {
  return (
    <>
      <main>
        <div className="w-full md:border md:border-black my-2 overflow-y-scroll">
          <div className="border border-black mt-4 mx-12 p-6 gap-2">
            Serach : <input type="text" className="w-max border" {...rest} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {crypto.map((coin: any, index: any) => {
                return (
                  <tr key="index">
                    <td>{coin.market_cap_rank}</td>
                    <td>
                      <div className="flex gap-2">
                        <img src={coin.image} alt={coin.name} className="w-5" />
                        {coin.name}
                      </div>
                    </td>
                    <td>$ {coin.current_price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
