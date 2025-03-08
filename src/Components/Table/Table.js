import React from "react";
import { Table } from "react-bootstrap";
import "./table.css";

const CommonTable = ({ headers, data }) => {
  return (
    <div style={{ overflowX: "auto" }}>
      <Table bordered hover responsive>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="table-head-title">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-data">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CommonTable;
