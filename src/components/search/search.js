import './search.css';
import { useState } from "react";
const axios = require('axios');

function SearchBar() {
  const [key, setKey] = useState("AIzaSyBhga4r04Dk_xprYFHZYTvGS-F9g2UFKIM")
  const [cx, setCx ] = useState("ec9b139201795556b")
  const [query, setQuery] = useState("");
  const [items, setItems] = useState("")
  var result = []
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (query){
    try {
            
        const { data } = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${query}`)
        console.log(data.items);
        for (var i = 0; i < 5; i++) {
            var item = data.items[i];
            result.push(item)
            
        }
        console.log(result)
        setItems(result.map((item) =>
        <div className="result" key={item.id}>
            <a className="title" href={item.formattedUrl}>{item.title}</a>
           
            <p>{item.snippet}</p>
        </div>
        ));

        } catch (error) {
        console.error(error);
        }
    } else{
        return 
    }

    
  }

  return (
      <div>
    <div id="cover">
    <form method="get" onSubmit={handleSubmit}>
      <div className="tb">
        <div className="td">
            <input type="text" 
            placeholder="Search" required 
            onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <div className="td" id="s-cover">
          <button type="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </form>

 
  </div>
  
  <ul>
  {items ? items : ''}
    
      </ul>  
  </div>
  )
}


export default SearchBar;