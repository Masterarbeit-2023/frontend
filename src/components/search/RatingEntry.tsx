interface RatingEntryProps {
  value: number;
  description: string;
  selected: boolean;
  onClick?: any;
}

const RatingEntry = (props: RatingEntryProps) => {
    const onClick = () => {
        props.onClick(props.value);
    }

    let selectedCss = "";
    if(props.selected) {
        selectedCss =" border border-green-500";
    }
  return (
    <div className={"flex p-3 m-1 w-60 cursor-pointer hover:border rounded-md" + selectedCss} onClick={onClick}>
      <div className="w-1/4 rounded-full bg-blue-500 text-center text-white align-bottom">
        {props.value}
      </div>
      <div className="pl-3">{props.description}</div>
    </div>
  );
};

export default RatingEntry;
