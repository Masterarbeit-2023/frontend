import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  Popover,
} from "antd";
import Container from "../components/Container";
import {  SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import FilterContainer from "../components/search/FilterContainer";
import BudgetFilter from "../components/search/BudgetFilter";
import RatingFilter from "../components/search/RatingFilter";

const { RangePicker } = DatePicker;

const SearchPage = () => {
  const [open, setOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);
  const [moreFilterOpen, setMoreFilterOpen] = useState(false);

  const [budgetRange, setBudgetRange] = useState([0, 500]);
  const [perNight, setPerNight] = useState(false);
  const [rating, setRating] = useState(0);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleBudgetOpenChange = (newOpen: boolean) => {
    setBudgetOpen(newOpen);
  };

  const handleRatingOpenChange = (newOpen: boolean) => {
    setRatingOpen(newOpen);
  };

  const handleMoreFilterOpenChange = (newOpen: boolean) => {
    setMoreFilterOpen(newOpen);
  };

  const onSaveBudget = (newPerNight: boolean, newBudgetRange: number[]) => {
    setPerNight(newPerNight);
    setBudgetRange(newBudgetRange);
  }

  const onSaveRating = (newRating: number) => {
    setRating(newRating);
  }
  

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
            <BudgetFilter onSave={onSaveBudget} budgetRange={budgetRange} perNight={perNight}/>
            <RatingFilter onSave={onSaveRating} currentRating={rating}/>
            <FilterContainer title="Mehr Filter">
              <Popover
                placement="bottom"
                content={<div></div>}
                title=""
                trigger="hover"
                open={moreFilterOpen}
                onOpenChange={handleMoreFilterOpenChange}
              >
                <Button type="primary" className="bg-blue-500 text-xs">
                  Mehr Filter
                </Button>
              </Popover>
            </FilterContainer>
          </div>
        </Container>
      </div>
      <Container><div></div></Container>
    </div>
  );
};

export default SearchPage;
