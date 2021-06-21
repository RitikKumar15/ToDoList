import React,{ useState } from 'react';

const ToDo = () => {
  
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  
  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  
  const deleteItems = (index) => {
    setNewItem((arr) => {
      return arr.filter((elem, i) => {
        return i !== index
      });
    });
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> ToDo List </h1>
          <input type="text" value={item} placeholder="Add an Items" onChange={itemEvent}
          />
          <button className="newBtn" onClick={listOfItems}>
            +
          </button>
          <ol>
           {
             newitem.map((elem, index) => {
               return (
               <>
               <span onClick={() => deleteItems(index)}><i className="fas fa-times-circle fa-lg" style={{color: "red"}}></i></span>
               <li key={index}>{elem}</li>
               <br />
               </>
               )
             })
           }
          </ol>
        </div>
      </div>
    </>
  );
};
  
export default ToDo;