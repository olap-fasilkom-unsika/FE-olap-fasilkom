import React, { useEffect, useState } from "react";
import { getDosenBebanKolokium } from "../../api/dosenService";
import CardComponent from "../../components/CardComponent/CardComponent";

const BebanKolokiumComponent = ({ id }) => {
  const [bebanKolokium, setBebanKolokium] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getDosenBebanKolokium(id)
      .then((response) => {
        setBebanKolokium(response.data.data.gelombang);
        console.log(response.data.data.gelombang);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <div></div>;
  }

  const rowBebanKolokium = [];

  for (let key in bebanKolokium) {
    if (bebanKolokium.hasOwnProperty(key)) {
      let value = bebanKolokium[key];
      rowBebanKolokium.push(value);
    }
  }
  console.log(rowBebanKolokium);

  return (
    <CardComponent
      title="Beban Kolokium"
      body={
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pembimbing</th>
              <th scope="col">Penguji</th>
            </tr>
          </thead>
          <tbody>
            {rowBebanKolokium?.map((sempro, i) => (
              <tr key={i}>
                <th scope="row">{`Gelombang ${i + 1}`}</th>
                <td className="text-center">{sempro["Dosen Pembimbing"]}</td>
                <td className="text-center">{sempro["Dosen Penguji"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
};

export default BebanKolokiumComponent;
