import React from "react";
import LayoutQuote from "../../../components/layout/layout-quote";
import Table from "../../../components/table";
import Icon from "../../../components/Icon";

function QuotePrice() {
  return (
    <LayoutQuote>
      <div>
        <div>
          <Icon iconName="ArrowSmallUpIcon"></Icon>
          <Icon iconName="ArrowSmallDownIcon"></Icon>
        </div>
      </div>
      <Table></Table>
    </LayoutQuote>
  );
}

export default QuotePrice;
