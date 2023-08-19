interface RatingEntryProps {
  value: number;
  description: string;
  selected: boolean;
}

const RatingEntry = (props: RatingEntryProps) => {
    let selectedCss = "";
    if(props.selected) {
        selectedCss =" border-1 border-green-500";
    }
  return (
    <div className={"flex p-3 w-60" + selectedCss}>
      <div className="w-1/4 rounded-full bg-blue-500 text-center text-white align-bottom">
        {props.value}
      </div>
      <div className="pl-3">{props.description}</div>
    </div>
  );
};

export default RatingEntry;
