import { Checkbox } from "antd";
import Filter from "./Filter";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import MoreFilterEntry from "./MoreFilterEntry";

interface MoreFilterProps {
  onSave: any;
  selectedFilter: string[];
  addItem: any;
  removeItem: any;
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

  const [selectedFilters, setSelectedFilters] = useState(props.selectedFilter);

  const onSave = () => {
    props.onSave(selectedFilters);
  };
  const save = (newFilters: string[]) => {
    props.onSave(newFilters);
  };

  const onOpen = () => {};

  const onReset = () => {};

  const onChange = (name: string, value: boolean) => {
    const tmpFilters = selectedFilters;
    if (!value && tmpFilters.filter((e) => e === name).length > 0) {
      setSelectedFilters(selectedFilters.filter((s) => s !== name));
      props.removeItem(name);
    } else if (value && tmpFilters.filter((e) => e === name).length == 0) {
      setSelectedFilters([...selectedFilters, name]);
      props.addItem(name);
    }
  };

  let buttonText = "Mehr Filter";
  if (props.selectedFilter.length > 0) {
    buttonText = props.selectedFilter.length + " ausgewählt";
  }

  return (
    <Filter
      label="Mehr Filter"
      buttonText={buttonText}
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
