import React, { useEffect, useState } from "react";
import { getDosenBebanSempro } from "../../api/dosenService";
import CardComponent from "../../components/CardComponent/CardComponent";
import LoadingComponent from "../../components/LoadingComponent";

const BebanSemproComponent = ({ id }) => {
  const [bebanSempro, setBebanSempro] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getDosenBebanSempro(id)
      .then((response) => {
        setBebanSempro(response.data.data.gelombang);
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

  const rowBebanSempro = [];

  for (let key in bebanSempro) {
    if (bebanSempro.hasOwnProperty(key)) {
      let value = bebanSempro[key];
      rowBebanSempro.push(value);
    }
  }

  return (
    <CardComponent
      title="Beban Seminar Proposal"
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
            {rowBebanSempro?.map((sempro, i) => (
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

export default BebanSemproComponent;
