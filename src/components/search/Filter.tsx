import React, { ReactNode, useState } from "react";
import FilterContainer from "./FilterContainer";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Popover, Button } from "antd";
interface FilterProps {
  children: ReactNode;
  label: string;
  buttonText: string;
  onSave: any;
  onOpen: any;
  resetDisabled: boolean;
  onReset?: any;
}
const Filter = (props: FilterProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
        props.onOpen();
    } else {
        props.onSave();
    }
  };

  let arrowIcon = <div></div>;
  if (open) {
    arrowIcon = <UpOutlined />;
  } else {
    arrowIcon = <DownOutlined />;
  }

  const close = () => {
    setOpen(false);
  }

  const onReset = () => {
    props.onReset();
    close();
  }

  const onSave = () => {
    props.onSave();
    close();
  }

  return (
    <FilterContainer title={props.label}>
      <Popover
        placement="bottom"
        content={
          <div className="">
            {props.children}
            <div className="border-t-2 pt-3 mt-3 justify-between flex w-full">
              <Button disabled={props.resetDisabled} onClick={onReset}>Zurücksetzen</Button>
              <Button type="primary" className="bg-blue-500" onClick={onSave}>
                Anwenden
              </Button>
            </div>
          </div>
        }
        title=""
        trigger="hover"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button
          type="primary"
          className="bg-blue-500 text-xs w-full justify-between flex items-center"
        >
          <p>{props.buttonText}</p> {arrowIcon}
        </Button>
      </Popover>
    </FilterContainer>
  );
};

export default Filter;
