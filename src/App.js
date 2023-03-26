import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from 'react-bootstrap/Dropdown';

function App() {
  const [barname, setBarname] = React.useState("");
  const [update, setUpdate] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const items = [
    {name:"Progress Bar1",
    value:10,
    color:"success"}, 
    {name:"Progress Bar2",
    value:25,
    color:"info"}, 
    {name:"Progress Bar3",
    value:50,
    color:"warning"}];
  const [item, setItem] = React.useState(items);
 
  React.useEffect(() => {
    console.log(value, item, barname)
    if(update){
      const items = item.map((newitem, i) =>  {
        if(newitem.name === barname){
          newitem.value = newitem.value+value
        if (newitem.value >= 100) 
           newitem.value = 100;
        if (newitem.value < 0) 
           newitem.value = 0;
        }           
        return newitem
      }
      )
      setItem(items)
      setUpdate(false)
    }
}, [update]);

  return (
    <div >
    <h1>
      Progress Bar
      <div className="component">
      {item.map((it, i) => (
        <div style={{ display: 'block',
        width: 700, padding: 30 }}>
          {it.name}: {parseInt(it.value)} %
        <ProgressBar variant={it.color} now={it.value} />
        </div>  
        ))}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
          {barname? barname: "Select Progress Bar"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
        {item.map((it, i) => (
          <Dropdown.Item
            key={i}
            as="button"
            onClick={() => setBarname(it.name)}
          >
            {it.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
            <Button variant="primary" onClick={() => (setUpdate(true), setValue(-(-10)))} >+10</Button>{' '}
           <Button variant="primary" onClick={() => (setUpdate(true), setValue(-(-25)))} value="+25">+25</Button>{' '}
           <Button variant="primary" onClick={() => (setUpdate(true), setValue(-10))} value="-10">-10</Button>{' '}
           <Button variant="primary"  onClick={() => (setUpdate(true), setValue(-25))}value="-25">-25</Button>{' '}
      </div>
    </h1>
  </div>
  );
}

export default App;
