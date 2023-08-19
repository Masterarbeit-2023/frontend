import { ReactNode, useState } from "react";
import { Button, Divider, Input, Slider } from "antd";
import Filter from "./Filter";
import { SliderMarks } from "antd/es/slider";

interface BudgetFilterProps {
  budgetRange: number[];
  perNight: boolean;
  onSave: any;
}
const BudgetFilter = (props: BudgetFilterProps) => {
  const [budgetRange, setBudgetRange] = useState(props.budgetRange);
  const [perNight, setPerNight] = useState(props.perNight);
  const [marks, setMarks] = useState<SliderMarks>({
    0: `${budgetRange[0]}€`,
    500: `${budgetRange[1]}€`,
  });

  const onSaveBudget = () => {
    props.onSave(perNight, budgetRange);
  };

  const onOpenBudget = () => {
    setBudgetRange(props.budgetRange);
    setPerNight(props.perNight);
    setMarks({
      0: `${props.budgetRange[0]}€`,
      500: `${props.budgetRange[1]}€`,
    });
  };

  const onReset = () => {
    setBudgetRange([0, 500]);
    setPerNight(false);
    props.onSave(false, [0,500]);
  }

  const onChangeBudgetSlider = (value: [number, number]) => {
    setBudgetRange([value[0], value[1]]);
    setMarks({
      0: `${budgetRange[0]}€`,
      500: `${budgetRange[1]}€`,
    });
  };

  const onChangePerNight = () => {
    setPerNight(true);
  }

  const onChangeWholeVacation = () => {
    setPerNight(false);
  }
  const buttonText = `${props.budgetRange[0]}€ - ${props.budgetRange[1]}€`;

  const selected = " bg-green-500 text-white hover:text-white"
  let perNightSelected ="";
  let wholeVacationSelected = "";
  let labelText = "Festgelegtes Budget: pro Nacht";
  if (perNight) {
    perNightSelected = selected;
  } else {
    wholeVacationSelected = selected;
    labelText = "Festgelegtes Budget: ges. Aufenthalt"
  }
  return (
    <Filter
      label= { labelText }
      buttonText={buttonText}
      onSave={onSaveBudget}
      onOpen={onOpenBudget}
      resetDisabled={false}
      onReset={onReset}
    >
      <div>
        <div className="flex rounded-full border p-1 justify-between items-center">
          <Button className={"rounded-full w-1/2 text-xs" + perNightSelected} onClick={onChangePerNight}>Pro Nacht</Button>
          <Divider type="vertical" className="border-black" />
          <Button className={"rounded-full w-1/2 text-xs" + wholeVacationSelected} onClick={onChangeWholeVacation}>Ges. Aufenthalt</Button>
        </div>
        <div>
          <p className="font-bold">Preisspanne</p>
          <Slider
            range
            defaultValue={[budgetRange[0], budgetRange[1]]}
            marks={marks}
            disabled={false}
            tooltip={{ formatter: null }}
            onChange={onChangeBudgetSlider}
            max={500}
          />
        </div>
      </div>
    </Filter>
  );
};

export default BudgetFilter;
