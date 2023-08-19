import { Select } from "antd";
import maps from "../../maps.png";
import { BookOutlined } from "@ant-design/icons";

interface SortHeaderProps {
    handleSortChange: any;
}

const SortHeader = (props: SortHeaderProps) => {
  const handleChange = (value: string) => {
    props.handleSortChange(value);
  };

  return (
    <div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center w-1/3">
          <p className="text-sm font-bold">Sortiert nach</p>
          <Select
            className="w-1/2 ml-3"
            defaultValue="experience"
            onChange={handleChange}
            options={[
              { value: "experience", label: "Bewertung" },
              { value: "distance", label: "Entfernung" },
              { value: "price", label: "Preis" },
            ]}
          />
        </div>
        <div className="w-1/3 h-16 border relative rounded-lg cursor-pointer hidden">
          <img className="w-full h-full rounded-lg" src={maps} />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white rounded shadow-lg flex items-center p-1 hover:bg-blue-500 transition-all hover:text-white">
              <BookOutlined className="pr-2" />
              Karte
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortHeader;
