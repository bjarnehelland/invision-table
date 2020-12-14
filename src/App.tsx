import * as React from "react";
import "./styles.css";
import Table from './Table'
import {makeStackedHeadersData, makeTaskData} from './makeData'


const {columns, data} = makeStackedHeadersData()
//const {columns, data} = makeTaskData()

export default function App() {

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}
