export default function VersionOrder(versions) {
    return (
        <ol>
            <li>{versions.bank.Old}</li>
            <li>{versions.bank.Mid}</li>
            <li>{versions.bank.New}</li>
        </ol>
    )
}