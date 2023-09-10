import {useEffect, useState} from "react";
import Extra from "../../../models/Extra";
import ExtraView from "./ExtraView";

interface ExtraSelectionProps {

    handleExtraSelection: any;
    selectedExtras: Extra[];
}
const ExtraSelection = (props: ExtraSelectionProps) => {
    const [possibleExtras, setPossibleExtras] = useState<Extra[]>([])

    const isSelected = (extra: Extra) => {
        return props.selectedExtras.filter((e) => e.id === extra.id).length > 0;
    }

    const fetchExtras = () => {
        fetch(`http://localhost:8080/extras`)
            .then((response) => response.json())
            .then((data) => {
                setPossibleExtras(data);
            });
    }
    useEffect(() => {
        fetchExtras();
    }, []);
    return (<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}>
        {
            possibleExtras.map((extra, index) =>
                <ExtraView key={index} extra={extra} selected={isSelected(extra)}  handleExtraSelection={props.handleExtraSelection}/>
            )
        }
    </div>);
}

export default ExtraSelection;