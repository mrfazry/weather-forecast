import React from 'react';

const TableGroup = ({ header, date, dailyTemp, tempDiff }) => {
  const tableHeader = header.map(data => <th>{data}</th>);

  const test = [0, 1, 2, 3, 4];

  const tableData = test.map(index => {
    return (
      <tr>
        <td>{date[index]}</td>
        <td>{dailyTemp[index]}</td>
        <td>{tempDiff[index]}</td>
      </tr>
    );
  });

  const meanDailyTemp = (
    dailyTemp.reduce((acc, curr) => acc + curr) / 5
  ).toFixed(2);

  const meanTempDiff = (
    tempDiff.reduce((acc, curr) => +acc + +curr) / 5
  ).toFixed(2);

  const tableFooter = (
    <tr>
      <td>
        <b>Rata-rata</b>
      </td>
      <td>{meanDailyTemp}</td>
      <td>{meanTempDiff}</td>
    </tr>
  );

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>{tableHeader}</tr>
        </thead>

        <tbody>
          {tableData}
          {tableFooter}
        </tbody>
      </table>
    </div>
  );
};

export default TableGroup;
