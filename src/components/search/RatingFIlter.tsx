import Filter from "./Filter";


interface RatingFilterProps {
    budgetRange: number[];
    perNight: boolean;
    onSave: any;
  }

  const RatingFilter = (props: RatingFilterProps) => {

    const onSaveBudget = () => {
      };
    
      const onOpenBudget = () => {
      };

    return (
        <Filter
        label= "Bewertung"
        buttonText= "Bewertung"
        onSave={onSaveBudget}
        onOpen={onOpenBudget}
        resetDisabled={false}>

        </Filter>
    );
  }