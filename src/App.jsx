import InfoCard from "./InfoCard";

const miku = { Name: "Hatsune Miku", Released: "August 31, 2007", Sample: "Saki Fujita" }

const meiko = { Name: "MEIKO", Released: "November 5, 2004", Sample: "Meiko Haigou" }

const kaito = { Name: "KAITO", Released: "February 17, 2006", Sample: "Naoto Fuoga" }

const krl = { Name: "Kagamine Rin & Len", Released: "December 27, 2007", Sample: "Asami Shimoda" }

export default function App() {
  return (
    <div>
      <InfoCard bank={miku} />
    </div>
  )
}
