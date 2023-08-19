import { Checkbox } from "antd";
import Filter from "./Filter";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import MoreFilterEntry from "./MoreFilterEntry";

interface MoreFilterProps {
  onSave: any;
  selectedFilter: string[];
}

const MoreFilter = (props: MoreFilterProps) => {
  const [filters, setFilters] = useState([
    "Kostenlose Stornierung",
    "Frühstück inklusive",
    "Pool",
    "Parkplatz",
    "Fitnessraum",
    "WLAN",
    "Klimaanlage",
    "Haustiere erlaubt",
    "Bezahlung in der Unterkunft",
    "Spa",
    "Rollstuhlgerecht",
  ]);

  const onSave = () => {
  };
  const save = (newFilters: string[]) => {
    props.onSave(newFilters);
  };

  const onOpen = () => {};

  const onReset = () => {};

  const onChange = (name: string, value: boolean) => {
    console.log("Name: " + name);
    const tmpFilters = props.selectedFilter;
    if (!value && tmpFilters.filter((e) => e === name).length > 0) {
      const index = tmpFilters.indexOf(name, 0);
      if (index > -1) {
        tmpFilters.splice(index, 1);
      }
    } else if (value && tmpFilters.filter((e) => e === name).length == 0) {
      tmpFilters.push(name);
    }
    save(tmpFilters);
  };

  return (
    <Filter
      label="Mehr Filter"
      buttonText="Mehr Filter"
      onSave={onSave}
      onOpen={onOpen}
      resetDisabled={false}
      onReset={onReset}
    >
      <div className="grid grid-cols-2">
        {filters.map((filter, index) => (
          <MoreFilterEntry key={index} value={filter} onChange={onChange} />
        ))}
      </div>
    </Filter>
  );
};

export default MoreFilter;
