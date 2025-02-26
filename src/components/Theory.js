import React from "react";
import "./css/Theory.css";

export default function Theory() {
  return (
    <div className="divContent">
      <h2><strong>Objective:</strong></h2>
      <p>To gain knowledge of the physical features of India.</p>

      <h3><strong>Ranges and Mountains of India:</strong></h3>
      <p>The table below lists the Ranges and Mountains of India.</p>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Ranges</th>
              <th>Mountains</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Gir Range","Anai Malai"],
              ["Sulaiman Range","Mahendragiri"],
              ["Hindu Kush","Rakaposhi"],
              ["Pamir Knot","Nanga Parbat"],
              ["Kunlun Mts","K²"],
              ["Karakoram Range","Namcha Barwa"],
              ["Ladakh Range","Kamet"],
              ["Western Ghats","Nanda Devi"],
              ["Garo Khasi Jaintia","Gurla Mandhata"],
              ["Mizo Hills","Dhaulagiri"],
              ["Naga Hills","Annapurna"],
              ["Patkai Bum","Mt Everest"],
              ["Kailash Range","Makalu"],
              ["Zaskar Range","Kanchenjunga"],
              ["Greater Himalaya","-"],
              ["Middle Himalaya","-"],
              ["Shiwalik Range","-"],
              ["Aravali Range","-"],
              ["Vindhya Range","-"],
              ["Satpura Range","-"],
              ["Dafla Hills","-"],
              ["Mahadeo Hills","-"],
              ["Eastern Ghats","-"]
            ].map(([range, mountain], index) => (
              <tr key={index}>
                <td>{range}</td>
                <td>{mountain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
