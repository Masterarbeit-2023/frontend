import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Popover,
} from "antd";
import Container from "../components/Container";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import BudgetFilter from "../components/search/BudgetFilter";
import RatingFilter from "../components/search/RatingFilter";
import MoreFilter from "../components/search/MoreFilter";
import SortHeader from "../components/search/SortHeader";
import Hotel from "../models/Hotel";
import Rating from "../models/Rating";
import HotelInfoCardContainer from "../components/search/HotelInfoCardContainer";
import Address from "../models/Address";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { RangePicker } = DatePicker;

const SearchPage = () => {
  const [open, setOpen] = useState(false);

  const [budgetRange, setBudgetRange] = useState([0, 500]);
  const [perNight, setPerNight] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [sorting, setSorting] = useState("experience");

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [numberRooms, setNumberRooms] = useState(1);
  const [petsAllowed, setPetsAllowed] = useState(false);

  const [hotels, setHotels] = useState([
    new Hotel(
      "Testhotel2",
      "15:00",
      "12:00",
      new Address("Holzhude", 2, "21029", "Hamburg", "Deutschland"),
      new Rating(7.5, 7.1, 8, 8, 8, 8, 8, 8, 8, 8, 2, "", "", ""),
      [
        new Rating(
          8.1,
          8,
          8.1,
          8.2,
          8,
          8.1,
          8.2,
          8,
          8.1,
          8.2,
          8.1,
          "Das Hotel ist gut! Laesst keine Wuensche offen ausser - ab 11 pm nur Oeffnung ueber Sekurity! Das parkhaus ist leider sehr schlecht ausgeschildert - nach 10pm kann man sich verlaufen - wir haben 30 Minuten gebraucht und Hilfe benoetigt! Ohne Auto ok - mit Auto fier mich nicht mehr!",
          "Wilhelm",
          "25.02.2023"
        ),
      ],
      80,
      15.5
    ),
    new Hotel(
      "Testhotel",
      "15:00",
      "12:00",
      new Address("Holzhude", 2, "21029", "Hamburg", "Deutschland"),
      new Rating(8.1, 8, 8.1, 8.2, 8, 8.1, 8.2, 8, 8.1, 8.2, 8.1, "", "", ""),
      [
        new Rating(
          8.1,
          8,
          8.1,
          8.2,
          8,
          8.1,
          8.2,
          8,
          8.1,
          8.2,
          8.1,
          "Das Hotel ist gut! Laesst keine Wuensche offen ausser - ab 11 pm nur Oeffnung ueber Sekurity! Das parkhaus ist leider sehr schlecht ausgeschildert - nach 10pm kann man sich verlaufen - wir haben 30 Minuten gebraucht und Hilfe benoetigt! Ohne Auto ok - mit Auto fier mich nicht mehr!",
          "Wilhelm",
          "25.02.2023"
        ),
        new Rating(
          6.1,
          8,
          8.1,
          8.2,
          8,
          8.1,
          8.2,
          8,
          8.1,
          8.2,
          8.1,
          "Das Hotel ist gut! Laesst keine Wuensche offen ausser - ab 11 pm nur Oeffnung ueber Sekurity! Das parkhaus ist leider sehr schlecht ausgeschildert - nach 10pm kann man sich verlaufen - wir haben 30 Minuten gebraucht und Hilfe benoetigt! Ohne Auto ok - mit Auto fier mich nicht mehr!",
          "Wilhelm",
          "25.02.2023"
        ),
      ],
      120,
      1.9
    ),
  ]);
  const [filteredHotels, setFilteredHotels] = useState(
    hotels.sort((h1, h2) => h2.rating.score - h1.rating.score)
  );

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleSortingChange = (newSorting: string) => {
    setSorting(newSorting);
    if (newSorting == "experience") {
      setFilteredHotels(
        filteredHotels.sort((h1, h2) => h2.rating.score - h1.rating.score)
      );
    } else if (newSorting == "distance") {
      setFilteredHotels(
        filteredHotels.sort(
          (h1, h2) => h1.distanceToCentrum - h2.distanceToCentrum
        )
      );
    } else if (newSorting == "price") {
      setFilteredHotels(
        filteredHotels.sort((h1, h2) => h1.lowestPrice - h2.lowestPrice)
      );
    }
  };

  const onSaveBudget = (newPerNight: boolean, newBudgetRange: number[]) => {
    setPerNight(newPerNight);
    setBudgetRange(newBudgetRange);
    handleFilterChange();
  };

  const onSaveRating = (newRating: number) => {
    setRating(newRating);
    handleFilterChange();
  };

  const onSaveFilters = (newFilters: string[]) => {
    setSelectedFilter(newFilters);
  };

  const addItem = (item: string) => {
    setSelectedFilter([...selectedFilter, item]);
  };

  const removeItem = (item: string) => {
    setSelectedFilter(selectedFilter.filter((s) => s !== item));
  };

  const handleFilterChange = () => {
    let tmpHotels = hotels.filter(
      (h) => h.lowestPrice >= budgetRange[0] && h.lowestPrice <= budgetRange[1]
    );
    tmpHotels = tmpHotels.filter((h) => h.rating.score >= rating);

    setFilteredHotels(tmpHotels);
  };

  const handlePetsAllowedChange = (e: CheckboxChangeEvent) => {
    setPetsAllowed(e.target.checked);
  };

  const handleDecAdults = () => {
    setAdults(adults - 1);
  };
  const handleIncAdults = () => {
    setAdults(adults + 1);
  };
  const onChangeAdults = (value: number | null) => {
    if (value != null) {
      setAdults(value);
    }
  };

  const handleDecChildren = () => {
    setChildren(children - 1);
  };
  const handleIncChildren = () => {
    setChildren(children + 1);
  };
  const onChangeChildren = (value: number | null) => {
    if (value != null) {
      setChildren(value);
    }
  };

  const handleDecRooms = () => {
    setNumberRooms(numberRooms - 1);
  };
  const handleIncRooms = () => {
    setNumberRooms(numberRooms + 1);
  };
  const onChangeRooms = (value: number | null) => {
    if (value != null) {
      setNumberRooms(value);
    }
  };

  const onChangeLocation = (e: any) => {
    setLocation(e.target.value);
  };

  const onChangeDate = (value: any, dateString: any) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };

  return (
    <div className="pt-10">
      <div className="bg-gray-100 pt-10 h-52">
        <Container>
          <div className="mt-3 flex items-center pb-6 justify-between">
            <Input
              className="mr-3 w-1/3"
              placeholder="Ort"
              prefix={<SearchOutlined />}
            />
            <RangePicker className="mr-3 w-1/3" />
            <Popover
              content={
                <div>
                  <div className="mb-3">
                    <div className="flex">
                      <div className="my-auto w-1/2">Erwachsene</div>
                      <div className="flex mx-auto">
                        <Button
                          disabled={adults === 1}
                          onClick={handleDecAdults}
                          className="rounded-full mr-1"
                        >
                          -
                        </Button>
                        <InputNumber
                          min={1}
                          max={10}
                          value={adults}
                          defaultValue={adults}
                          onChange={onChangeAdults}
                          className="w-10 h-8 mr-1"
                        />
                        <Button
                          onClick={handleIncAdults}
                          className="rounded-full"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="flex mt-1">
                      <div className="my-auto w-1/2">Kinder</div>
                      <div className="flex mx-auto">
                        <Button
                          onClick={handleDecChildren}
                          disabled={children === 0}
                          className="rounded-full mr-1"
                        >
                          -
                        </Button>
                        <InputNumber
                          min={0}
                          max={10}
                          value={children}
                          defaultValue={children}
                          onChange={onChangeChildren}
                          className="w-8 h-8 mr-1"
                        />
                        <Button
                          onClick={handleIncChildren}
                          className="rounded-full"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div className="flex mt-1">
                      <div className="my-auto w-1/2">Zimmer</div>
                      <div className="flex mx-auto">
                        <Button
                          disabled={numberRooms === 1}
                          onClick={handleDecRooms}
                          className="rounded-full mr-1"
                        >
                          -
                        </Button>
                        <InputNumber
                          min={0}
                          max={10}
                          value={numberRooms}
                          defaultValue={numberRooms}
                          onChange={onChangeRooms}
                          className="w-8 h-8 mr-1"
                        />
                        <Button
                          onClick={handleIncRooms}
                          className="rounded-full"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 pt-3 mb-3">
                    <Checkbox
                      defaultChecked={petsAllowed}
                      onChange={handlePetsAllowedChange}
                    >
                      <h1 className="font-bold">Haustiere erlaubt</h1>
                      <p>Nur haustierfreundliche Unterkünfte</p>
                    </Checkbox>
                  </div>
                  <div className="border-t-2 pt-3 justify-between flex">
                    <Button disabled>Zurücksetzen</Button>
                    <Button type="primary" className="bg-blue-500">
                      Anwenden
                    </Button>
                  </div>
                </div>
              }
              title="Gäste & Zimmer"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Button type="primary" className="bg-blue-500 mr-3 text-xs">
                {numberRooms} Zimmer {adults + children} Gäste
              </Button>
            </Popover>
            <Button type="primary" className="bg-blue-500" href="/search">
              Suche
            </Button>
          </div>
          <div className="flex justify-between">
            <BudgetFilter
              onSave={onSaveBudget}
              budgetRange={budgetRange}
              perNight={perNight}
            />
            <RatingFilter onSave={onSaveRating} currentRating={rating} />
            <MoreFilter
              onSave={onSaveFilters}
              selectedFilter={selectedFilter}
              addItem={addItem}
              removeItem={removeItem}
            />
          </div>
        </Container>
      </div>
      <Container>
        <SortHeader handleSortChange={handleSortingChange} />
        <HotelInfoCardContainer hotels={filteredHotels} />
      </Container>
    </div>
  );
};

export default SearchPage;
