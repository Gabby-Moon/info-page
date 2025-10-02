export default function InfoCard(vocalBank) {
  return (
    <div>
      <h2>${vocalBank.Name}</h2>
      <ul>
        <li>${vocalBank.Sample}</li>
        <li>${vocalBank.Released}</li>
      </ul>
    </div>
  )
}
