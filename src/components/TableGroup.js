import React from 'react';

/**
 * contoh tabel
 * <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>date0</td>
        <td>temp0</td>
        <td>diff0</td>
      </tr>
      <tr>
        <td>date1</td>
        <td>temp1</td>
        <td>diff1</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>julyexample.com</td>
      </tr>
    </tbody>
  </table>
 */

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
