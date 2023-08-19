import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface MoreFilterEntryProps {
  value: string;
  onChange: any;
}

const MoreFilterEntry = (props: MoreFilterEntryProps) => {
  const onChange = (e: CheckboxChangeEvent) => {
    props.onChange(props.value, e.target.checked)
  };
  return <Checkbox onChange={onChange}>{props.value}</Checkbox>;
};

export default MoreFilterEntry;
