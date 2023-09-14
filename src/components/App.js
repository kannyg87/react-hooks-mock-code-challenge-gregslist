import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsData, setListingsData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(resp => resp.json())
      .then(data => setListingsData(data))
  }, [])

  
  const itemsToDisplay = listingsData.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );
  
  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const deletedItem = listingsData.filter((item) => item.id !== id);
        setListingsData(deletedItem);
      });
  }
    return (
      <div className="app">
        <Header search={search} setSearch={setSearch } />
        <ListingsContainer itemsToDisplay={ itemsToDisplay} handleDelete={handleDelete} />
      </div>
    );
}
export default App;
