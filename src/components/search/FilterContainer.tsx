import { ReactNode } from "react";

interface FilterContainerProps {
    title: string,
    children: ReactNode;
  }

const FilterContainer = (props: FilterContainerProps) => {
    return (
        <div className="text-center">
            <p className="font-bold text-xs w-full">{props.title}</p>
            {props.children}
        </div>
    );
}

export default FilterContainer;