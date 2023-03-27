import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Progress from '../src/components/Progressbar/Progress';
import items from '../src/data';

function App() {
  const [barname, setBarname] = React.useState("");
  const [update, setUpdate] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [item, setItem] = React.useState(items);
 
  React.useEffect(() => {
    console.log(value, item, barname)
    if(update){
      const items = item.map((newitem, i) =>  {
        if(newitem.name === barname){
          newitem.value = newitem.value+value
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
    <div>
    <Progress item={item}
    setBarname={setBarname}
    setUpdate={setUpdate}
    setValue={setValue}
    barname={barname}
    />
    </div>
  );
}

export default App;
