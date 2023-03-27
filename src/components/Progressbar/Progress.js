import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from 'react-bootstrap/Dropdown';


const Progress = (props) =>
{
    return (
        <div >
    <h1>
      Progress Bar
      <div className="component">
      {props.item&&props.item.map((it, i) => (
        <div style={{ display: 'block',
        width: 700, padding: 30 }}>
          {it.name}: {parseInt(it.value)} %
        <ProgressBar variant={(it.value && it.value>100)? "danger":it.color} now={it.value} label= {`${it.value}%`} />
        </div>  
        ))}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
          {props.barname? props.barname: "Select Progress Bar"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
        {props.item && props.item.map((it, i) => (
          <Dropdown.Item
            key={i}
            as="button"
            onClick={() => props.setBarname(it.name)}
          >
            {it.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
            <Button variant="primary" onClick={() => (props.setUpdate(true), props.setValue(-(-10)))} >+10</Button>{' '}
           <Button variant="primary" onClick={() => (props.setUpdate(true), props.setValue(-(-25)))} value="+25">+25</Button>{' '}
           <Button variant="primary" onClick={() => (props.setUpdate(true), props.setValue(-10))} value="-10">-10</Button>{' '}
           <Button variant="primary"  onClick={() => (props.setUpdate(true), props.setValue(-25))}value="-25">-25</Button>{' '}
      </div>
    </h1>
  </div>
    )
}

export default Progress