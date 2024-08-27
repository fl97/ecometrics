import data from './data/data'
import CO2Table from "./table/page";

export default function Home() {
  return (
    <main>
      <CO2Table data={data} />
    </main>
  );
}
