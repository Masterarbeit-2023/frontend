import { useState } from "react";
import Filter from "./Filter";
import RatingEntry from "./RatingEntry";

interface RatingFilterProps {
  onSave: any;
  currentRating: number;
}

const RatingFilter = (props: RatingFilterProps) => {
  const [rating, setRating] = useState(props.currentRating);

  const onSaveBudget = () => {
    props.onSave(rating)
  };

  const onOpen = () => {};

  const onClick = (value: number) => {
    setRating(value);
    props.onSave(value)
  }

  const onReset = () => {
    props.onSave(0);
  }

  return (
    <Filter
      label="Bewertung"
      buttonText="Bewertung"
      onSave={onSaveBudget}
      onOpen={onOpen}
      resetDisabled={rating==0}
      onReset={onReset}
    >
      <div>
        <RatingEntry value={8.5} description={"Hervorragend"} selected={props.currentRating <= 8.5} onClick={onClick} />
        <RatingEntry value={8.0} description={"Sehr gut"} selected={props.currentRating <= 8} onClick={onClick} />
        <RatingEntry value={7.5} description={"Gut"} selected={props.currentRating <= 7.5} onClick={onClick} />
        <RatingEntry value={7.0} description={"Angemessen"} selected={props.currentRating <= 7} onClick={onClick} />
        <RatingEntry value={0} description={"Akzeptabel"} selected={props.currentRating <= 0} onClick={onClick} />
      </div>
    </Filter>
  );
};

export default RatingFilter;
