import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [result, setResult] = useState(0);
  const fetchSum = async (a : number, b : number) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a : number, b : number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };
  useEffect(() => { fetchSum(a, b) }, []);
  useEffect(() => { fetchSubtraction(a, b) }, []);



  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input className="form-control mb-2" type="number" value={a}
        onChange={(e) => setA(Number(e.target.value))}/>
      <input className="form-control mb-2" type="number" value={b}
        onChange={(e) => setB(Number(e.target.value))} />
      <input className="form-control mb-2" value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button  className="btn btn-primary me-2" onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button className="btn btn-danger" onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>
  
      <h3>Path Parameters</h3>
      <a className="btn btn-primary me-2" href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger" href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>

      <h3>Query Parameters</h3>
      <a className="btn btn-primary me-2"
        href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger"
        href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>

    </div>
  );
}
export default EncodingParametersInURLs;

