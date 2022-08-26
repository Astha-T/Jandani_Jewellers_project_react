import React, { useState } from "react";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const userId = localStorage.getItem('user_id');
    const keyWord = localStorage.getItem('keyValue')

    useEffect(()=>{
      fetch('https://dev.weblaunchpad.in/jandani_jewellers/api/customer/search-product?user_id='+userId+"&key_word="+keyWord)
      .then(res => res.json())
      .then(data => {
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  });
  },[])
}

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <button>{value.name} </button>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;