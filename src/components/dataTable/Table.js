import React from "react";

export default function Table({
  tableData,
  thNames,
  thStyle,
  tdProperties,
  tdStyle,
}) {
  const noOfColumns = thNames.length;

  var thRowContent = [];
  for (var i = 0; i < noOfColumns; i++) thRowContent.push({ name: thNames[i] });

  var tdRowContent = [];
  for (var i = 0; i < noOfColumns; i++)
    tdRowContent.push({ name: tdProperties[i] });

  return (
    <div style={{ margin: "1rem", width: "100%" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {thRowContent.map((row, index) => (
              <th style={thStyle} key={index}>
                <span>{row.name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {tdRowContent.map((value) => {
                const propertyName = value.name;
                return (
                  <td style={tdStyle} key={index}>
                    <span>{row[propertyName]}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
