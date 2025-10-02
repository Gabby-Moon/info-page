export default function InfoCard(vocalBank) {
  return (
    <div>
      <h2>Name: {vocalBank.bank.Name}</h2>
      <ul>
        <li>Sample Voice: {vocalBank.bank.Sample}</li>
        <li>Relased Date: {vocalBank.bank.Released}</li>
      </ul>
    </div>
  )
}
