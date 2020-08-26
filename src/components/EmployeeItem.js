import React from "react";

export default function EmployeeItem(props) {
  return (
    <tbody>
      <tr>
        <td></td>
        <td>props.firstName</td>
        <td>props.lastName</td>
        <td>props.email</td>
        <td>props.city</td>
        <td>props.state</td>
      </tr>
    </tbody>
  );
}
