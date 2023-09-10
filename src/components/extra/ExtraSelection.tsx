import {useEffect, useState} from "react";
import Extra from "../../models/Extra";

interface ExtraSelectionProps {

}
const ExtraSelection = (props: ExtraSelectionProps) => {
    const [possibleExtras, setPossibleExtras] = useState<Extra[]>([])

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

    console.log(possibleExtras)
    return (<div>

    </div>);
}

export default ExtraSelection;