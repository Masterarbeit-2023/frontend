import { Button, Checkbox, DatePicker, Input, Popover } from "antd";
import Container from "../components/Container";
import { BookOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import BudgetFilter from "../components/search/BudgetFilter";
import RatingFilter from "../components/search/RatingFilter";
import MoreFilter from "../components/search/MoreFilter";
import SortHeader from "../components/search/SortHeader";
import Hotel from "../models/Hotel";
import HotelInfoCard from "../components/search/HotelInfoCard";
import Rating from "../models/Rating";
import HotelInfoCardContainer from "../components/search/HotelInfoCardContainer";
import Address from "../models/Address";

const { RangePicker } = DatePicker;

const SearchPage = () => {
  const [open, setOpen] = useState(false);

  const [budgetRange, setBudgetRange] = useState([0, 500]);
  const [perNight, setPerNight] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [sorting, setSorting] = useState("experience");
  const [hotels, setHotels] = useState([
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
      ]
    ),
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
      ]
    ),
  ]);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleSortingChange = (newSorting: string) => {
    setSorting(newSorting);
  };

  const onSaveBudget = (newPerNight: boolean, newBudgetRange: number[]) => {
    setPerNight(newPerNight);
    setBudgetRange(newBudgetRange);
  };

  const onSaveRating = (newRating: number) => {
    setRating(newRating);
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

  return (
    <div className="pt-10">
      <div className="bg-gray-100 pt-10 h-52">
        <Container>
          <div className="mt-3 flex items-center pb-6 justify-between">
            <Input
              className="mr-3 w-1/3"
              placeholder="Hotel"
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
                        <Button className="rounded-full mr-1">-</Button>
                        <Input className="w-8 h-8 mr-1" value={1} />
                        <Button className="rounded-full">+</Button>
                      </div>
                    </div>
                    <div className="flex mt-1">
                      <div className="my-auto w-1/2">Kinder</div>
                      <div className="flex mx-auto">
                        <Button className="rounded-full mr-1">-</Button>
                        <Input className="w-8 h-8 mr-1" value={1} />
                        <Button className="rounded-full">+</Button>
                      </div>
                    </div>
                    <div className="flex mt-1">
                      <div className="my-auto w-1/2">Zimmer</div>
                      <div className="flex mx-auto">
                        <Button className="rounded-full mr-1">-</Button>
                        <Input className="w-8 h-8 mr-1" value={1} />
                        <Button className="rounded-full">+</Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 pt-3 mb-3">
                    <Checkbox>
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
                1 Zimmer 2 Gäste
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
        <HotelInfoCardContainer hotels={hotels} />
      </Container>
    </div>
  );
};

export default SearchPage;
