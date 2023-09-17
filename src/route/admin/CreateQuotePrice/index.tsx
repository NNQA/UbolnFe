import LayoutMain from "../../../components/layout/layout-admin-main";
import Table from "../../../components/table";
import Icon from "../../../components/Icon";
import ActionButton from "../../../components/ActionButton";
import Button from "../../../components/Button";
import Search from "../../../components/Search";

function QuotePrice() {
  return (
    <LayoutMain title="Quote price">
      <div className="w-full flex justify-end gap-10">
        <ActionButton className="flex flex-row gap-3 cursor-pointer justify-center items-center px-2 py-1">
          <div>
            <Icon
              iconName="ArrowSmallUpIcon"
              className="text-fiord-cfg-600 h-3 aspect-square"
            ></Icon>
            <Icon
              iconName="ArrowSmallDownIcon"
              className="text-fiord-cfg-600 w-3 h-3"
            ></Icon>
          </div>
          <div className="font-medium text-sm">
            <p className="text-fiord-cfg-600">Sort</p>
          </div>
        </ActionButton>
        <ActionButton className="flex flex-row gap-2 cursor-pointer justify-center items-center px-2 py-1">
          <div>
            <Icon
              iconName="TrashIcon"
              className="text-fiord-cfg-600 h-[0.9rem]"
            ></Icon>
          </div>
          <div className="font-medium text-sm">
            <p className="text-fiord-cfg-600">Delete</p>
          </div>
        </ActionButton>
        <div className="w-[30%]">
          <Search className="w-"></Search>
        </div>
        <div className="flex items-center gap-5">
          <Button
            className="w-fit p-2"
            props={{
              type: "submit",
            }}
          >
            <p>Add new quote</p>
          </Button>
          <Button
            className="w-fit p-2"
            props={{
              type: "submit",
            }}
          >
            <p>Export</p>
          </Button>
        </div>
      </div>
      <Table></Table>
    </LayoutMain>
  );
}

export default QuotePrice;
