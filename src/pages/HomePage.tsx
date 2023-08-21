import WelcomePanel from "../components/home/WelcomePanel";
import HotelOverview from "../components/home/HotelOverview";
import RoomOverview from "../components/home/RoomOverview";
import RestaurantOverview from "../components/home/RestaurantOverview";
import SpaOverview from "../components/home/SpaOverview";
import Footer from "../components/home/Footer";
import Container from "../components/Container";
import {
  Button,
  Input,
  DatePicker,
  Popover,
  Checkbox,
  InputNumber,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { RangePicker } = DatePicker;

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [numberRooms, setNumberRooms] = useState(1);
  const [petsAllowed, setPetsAllowed] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
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
    <div>
      <div className="relative">
        <WelcomePanel />
        <div className="absolute inset-0 flex justify-center items-center shadow-lg">
          <div className="bg-white rounded-full shadow-lg flex items-center p-2">
            <Input
              className="mr-3 w-1/3"
              placeholder="Ort"
              bordered={false}
              onChange={onChangeLocation}
              prefix={<SearchOutlined />}
            />
            <RangePicker
              onChange={onChangeDate}
              bordered={false}
              className="mr-3 w-1/3"
            />
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
                          className="w-10 h-8 mr-1"
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
                          className="w-10 h-8 mr-1"
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
        </div>
      </div>

      <Container>
        <HotelOverview />
        <RoomOverview />
        <RestaurantOverview />
        <SpaOverview />
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
