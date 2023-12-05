import { useState, useEffect } from "react";
import Select from "./select/Select.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUserData = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>{loading ? <div>Loading...</div> : <Select products={products} />}</>
  );
}

export default App;
