export default function InfoCard(vocalBank) {
  return (
    <div>
      <h2>${vocalBank.bank.Name}</h2>
      <ul>
        <li>${vocalBank.bank.Sample}</li>
        <li>${vocalBank.bank.Released}</li>
      </ul>
    </div>
  )
}
