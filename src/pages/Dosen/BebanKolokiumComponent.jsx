import React, { useEffect, useState } from "react";
import { getDosenBebanKolokium } from "../../api/dosenService";
import CardComponent from "../../components/CardComponent/CardComponent";
import LoadingComponent from "../../components/LoadingComponent";

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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingComponent />;
  }

  const rowBebanKolokium = [];

  for (let key in bebanKolokium) {
    if (bebanKolokium.hasOwnProperty(key)) {
      let value = bebanKolokium[key];
      rowBebanKolokium.push(value);
    }
  }

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
            {rowBebanKolokium?.map((kolokium, i) => (
              <tr key={i}>
                <th scope="row">{`Gelombang ${i + 1}`}</th>
                <td className="text-center">{kolokium.dosenPembimbing}</td>
                <td className="text-center">{kolokium.dosenPenguji}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
};

export default BebanKolokiumComponent;
