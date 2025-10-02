import InfoCard from "./InfoCard";
import VersionOrder from "./VersionOrder";

const miku = { Name: "Hatsune Miku", Released: "August 31, 2007", Sample: "Saki Fujita" }
const mikuList = { Old: "Miku v1", Mid: "Miku v3", New: "Miku v4" }

const meiko = { Name: "MEIKO", Released: "November 5, 2004", Sample: "Meiko Haigou" }

const kaito = { Name: "KAITO", Released: "February 17, 2006", Sample: "Naoto Fuoga" }

const krl = { Name: "Kagamine Rin & Len", Released: "December 27, 2007", Sample: "Asami Shimoda" }
const krlList = { Old: "Ren & Len v1", Mid: "Ren & Len append", New: "Ren & Len v4x" }


export default function App() {
  return (
    <div>
      <InfoCard bank={miku} />
      <VersionOrder bank={mikuList} />
      <InfoCard bank={meiko} />
      <InfoCard bank={kaito} />
      <InfoCard bank={krl} />
      <VersionOrder bank={krlList} />
      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Download</th>
          <th>Version compairson</th>
        </tr>
        <tr>
          <td>Miku</td>
          <td><img src="../public/miku.jpg" alt="Anime girl with teal pigtails"></img></td>
          <td><a href="https://sonicwire.com/product/virtualsinger/special/mikuv4x?lang=en&srsltid=AfmBOoq2mzAPatSsWX2e_MAV-Pu2mDGLvYxKALBpMVV9oJdmirTNELF3">Link</a></td>
          <td><iframe width="873" height="251" src="https://www.youtube.com/embed/rQRlSJJ0OrI" title="Monitoring 【All Miku Voicebanks】" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></td>
        </tr>
      </table>
    </div>
  )
}
