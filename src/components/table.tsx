import React, { useState } from "react";
import { fakeData } from "../lib/data/fake";
import CheckBox from "./CheckBox";

function Table() {
  const [checked, setChecked] = useState<Array<boolean>>(
    Array<boolean>(fakeData.length).fill(false)
  );

  const toggleChecked = (index: number) => {
    setChecked((pre) => pre.map((item, idx) => (idx === index ? !item : item)));
  };
  const toggleAllChecked = (e: Event) => {
    setChecked((pre) => pre.map(() => (e.target as HTMLInputElement).checked));
  };
  function reverseDateFormat(inputDate: string) {
    const parts = inputDate.split("-");
    if (parts.length === 3) {
      const reversedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
      return reversedDate;
    }
    return inputDate;
  }

  return (
    <table className="w-full text-left">
      <thead className="text-base text-fiord-cfg-300 font-bold">
        <tr>
          <th scope="col" className="px-5 py-5 flex items-center gap-3">
            <CheckBox
              indeterminate={checked.some((v) => v) && !checked.every((v) => v)}
              onChange={toggleAllChecked}
              checked={checked.every((v) => v)}
            ></CheckBox>
            Serial
          </th>
          <th scope="col" className="px-4 py-5">
            Customer
          </th>
          <th scope="col" className="px-4 py-5">
            Discount
          </th>
          <th scope="col" className="px-4 py-5">
            Orders
          </th>
          <th scope="col" className="px-4 py-5">
            StartYmd
          </th>
          <th scope="col" className="px-4 py-5">
            EndYmd
          </th>
        </tr>
      </thead>
      <tbody className="">
        {fakeData.map(({ ...data }, idx) => (
          <tr
            className="items-center text-fiord-cfg-400 border-b-[0.1px] border-solid border-[#edeef8] hover:bg-fiord-cfg-50 hover:bg-opacity-10 cursor-pointer"
            key={idx}
            onClick={() => toggleChecked(idx)}
          >
            <td scope="row" className="px-5 py-5 flex gap-3 items-center">
              <CheckBox
                onChange={() => toggleChecked(idx)}
                checked={checked[idx]}
                idx={idx}
              ></CheckBox>
              {data.serial}
            </td>
            <td scope="row" className="px-5 py-5 font-bold text-fiord-cfg-200">
              {data.customer.name}
            </td>
            <td scope="row" className="px-5 py-5 font-bold text-fiord-cfg-200">
              {data.quotePriceDiscount}{" "}
              <span className="text-fiord-cfg-200 font-bold"> %</span>
            </td>
            <td scope="row" className="px-5 py-5">
              {data.customerOrders[0].quantity === 1 ? (
                <p className="font-bold text-fiord-cfg-200">
                  {data.customerOrders[0].quantity} order
                </p>
              ) : (
                <p className="font-bold text-fiord-cfg-200">
                  {data.customerOrders[0].quantity} orders
                </p>
              )}
            </td>
            <td scope="row" className="px-4 py-5">
              {reverseDateFormat(data.quoteStartYmd)}
            </td>
            <td scope="row" className="px-4 py-5">
              {reverseDateFormat(data.quoteEndYmd)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
