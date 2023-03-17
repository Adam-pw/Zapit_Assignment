import styles from "./MainPage.module.scss";

export default function MainPage() {
  return (
    <>
      <main>
        <div className={styles.main}>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$ 24,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ethereum</td>
                <td>$ 1,800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
