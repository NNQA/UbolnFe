import LayoutMain from "../../../components/layout/layout-admin-main";
import Table from "../../../components/table";
import Icon from "../../../components/Icon";
import Secondarybutton from "../../../components/Secondarybutton";
import Button from "../../../components/Button";
import Search from "../../../components/Search";
import Modal from "../../../components/Modal";
import { useState } from "react";

function QuotePrice() {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => {
    setShow(false);
  };

  return (
    <LayoutMain title="Quote price">
      <div className="flex flex-col gap-10">
        <div className="w-full flex justify-end gap-5 items-center">
          <Secondarybutton className="flex flex-row gap-2 cursor-pointer justify-center items-center px-2 py-1">
            <Icon
              iconName="FunnelIcon"
              className="text-fiord-cfg-400 h-[13.5px] [&>path]:stroke-[2]"
            ></Icon>

            <div className="font-medium text-sm">
              <p className="text-fiord-cfg-400">Sort</p>
            </div>
          </Secondarybutton>
          <Secondarybutton className="flex flex-row gap-2 cursor-pointer justify-center items-center px-2 py-1">
            <div>
              <Icon
                iconName="TrashIcon"
                className="text-fiord-cfg-400 h-[13.5px] [&>path]:stroke-[2]"
              ></Icon>
            </div>
            <div className="font-medium text-sm">
              <p className="text-fiord-cfg-400">Delete</p>
            </div>
          </Secondarybutton>
          <div className="w-[30%]">
            <Search className=""></Search>
          </div>
          <div className="flex items-center gap-5">
            <Button
              className="w-fit p-2"
              props={{
                type: "submit",
              }}
              onClick={() => setShow(true)}
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

        <Modal show={show} onClose={handleShow}>
          asdawdasd
        </Modal>
      </div>
    </LayoutMain>
  );
}

export default QuotePrice;
