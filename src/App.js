import React, { useState } from 'react';
import { useEffect } from 'react';

import './App.css';

const initialData = [
  { numero: 1, client: "Raid Oriental", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 2, client: "Palais d'ouzoud", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 3, client: "Nadi-Amani", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 4, client: "Banda DomBaraka", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 5, client: "Blue sea", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 6, client: "Diwan casa", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 7, client: "Panorama-complexe Touristique Tafilalt", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 8, client: "Marrakech tourisme Gestion Ryad Parc", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 9, client: "Forme-Surface", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 10, client: "Kasbah Syrriko", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 11, client: "Dorsor", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 12, client: "Ste-Touristique Ozod-imperial", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 13, client: "Dar Diafa Kaltoum", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 14, client: "Lawronce d'arabie", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 15, client: "Narjis d'invertissent BF", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 16, client: "Ste financier d'Africa Palace Allegro", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 17, client: "Hotel Rivoli BC", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 18, client: "Chems Ayour", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 19, client: "Riad Tecla", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 20, client: "Tertial-Aqua Mirrage", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 21, client: "Kasbah de toubkal", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 22, client: "Tui Blu Medina", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 23, client: "Riad Mazaya", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 24, client: ".........................", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 25, client: ".........................", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
  { numero: 26, client: ".........................", inscription: false, a3d: false, chargeProjet: "", prototype: false, cps: false, quante: false, signatureCp: false, livrable: "", dateDepart: false, paiement: "", debut: false },
];

const App = () => {
const [data, setData] = useState(() => {
  const saved = localStorage.getItem("clientsData");
  return saved ? JSON.parse(saved) : initialData;
});
useEffect(() => {
  localStorage.setItem("clientsData", JSON.stringify(data));
}, [data]);

  const handleChange = (e, index, field) => {
    const updated = [...data];
    if (e.target.type === "checkbox") {
      updated[index][field] = e.target.checked;
    } else {
      updated[index][field] = e.target.value;
    }
    setData(updated);
  };
  useEffect(() => {
  localStorage.setItem("clientsData", JSON.stringify(data));
}, [data]);

  const handleAddRow = () => {
  const newClient = {
    numero: data.length + 1,
    client: "",
    inscription: false,
    a3d: false,
    chargeProjet: "",
    prototype: false,
    cps: false,
    quante: false,
    signatureCp: false,
    livrable: "",
    col1: false,
    col2: false,
    col3: false,
    paiement: "",
    debut: false,
    debutNote: "",
    fin: false,
    finNote: ""
  };
  setData([...data, newClient]);
};



  return (
    <div className="App">
      <h1>Suivi des Clients</h1>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Client</th>
            <th>Inscription</th>
            <th>Affectation A3D</th>
            <th>Chargé de projet</th>
            <th>Choix du prestataire</th>
            <th>CPS</th>
            <th>Validations CP CP5</th>
            <th>Dépot Physique</th>
            <th>Date D.P</th>
            <th>Quote parte client</th>
            <th>Signature CP</th>
            <th>Dépot Elec Livrable</th>
            <th>Date dépot</th>
            <th>Dépot Physique Livrable</th>
            <th>Date de dépot</th>
            <th>Dépot dossier Paiement</th>
            <th>Date de dépot</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.numero}</td>
              <td>
                <input value={row.client} onChange={(e) => handleChange(e, index, "client")} />
              </td>
              <td><input type="checkbox" checked={row.inscription} onChange={(e) => handleChange(e, index, "inscription")} /></td>
              <td><input type="checkbox" checked={row.a3d} onChange={(e) => handleChange(e, index, "a3d")} /></td>
              <td><input maxLength={1} value={row.chargeProjet} onChange={(e) => handleChange(e, index, "chargeProjet")} /></td>
              <td><input type="checkbox" checked={row.prototype} onChange={(e) => handleChange(e, index, "prototype")} /></td>
              <td><input type="checkbox" checked={row.cps} onChange={(e) => handleChange(e, index, "cps")} /></td>
              <td><input type="checkbox" checked={row.quante} onChange={(e) => handleChange(e, index, "quante")} /></td>
              <td><input type="checkbox" checked={row.signatureCp} onChange={(e) => handleChange(e, index, "signatureCp")} /></td>
              <td><input type="text" value={row.livrable} onChange={(e) => handleChange(e, index, "livrable")} placeholder="JJ/MM ou texte" /></td>
              <td><input type="checkbox" checked={row.col1} onChange={(e) => handleChange(e, index, "col1")} /></td>
              <td><input type="checkbox" checked={row.col2} onChange={(e) => handleChange(e, index, "col2")} /></td>
              <td><input type="checkbox" checked={row.col3} onChange={(e) => handleChange(e, index, "col3")} /></td>
              <td><input type="text" value={row.paiement} onChange={(e) => handleChange(e, index, "paiement")} placeholder="JJ/MM ou texte" /></td>
              <td><input type="checkbox" checked={row.debut} onChange={(e) => handleChange(e, index, "debut")} /></td>
              <td><input type="text" value={row.debutNote} onChange={(e) => handleChange(e, index, "debutNote")} placeholder="JJ/MM ou texte" /></td>
              <td><input type="checkbox" checked={row.fin} onChange={(e) => handleChange(e, index, "fin")} /></td>
              <td><input type="text" value={row.finNote} onChange={(e) => handleChange(e, index, "finNote")} placeholder="JJ/MM ou texte" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>+ Ajouter un client</button>

    </div>
  );
};

export default App;
