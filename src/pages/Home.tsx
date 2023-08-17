import WelcomePanel from "../components/home/WelcomePanel";
import HotelOverview from "../components/home/HotelOverview";
import RoomOverview from "../components/home/RoomOverview";
import RestaurantOverview from "../components/home/RestaurantOverview";
import SpaOverview from "../components/home/SpaOverview";
import Footer from "../components/home/Footer";
import Container from "../components/Container";
import { Button, Input, DatePicker, Popover, Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const { RangePicker } = DatePicker;

const Home = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div>
      <div className="relative">
        <WelcomePanel />
        <div className="absolute inset-0 flex justify-center items-center shadow-lg">
          <div className="bg-white rounded-full shadow-lg flex items-center p-2">
            <Input
              className="mr-3 w-1/3"
              placeholder="Hotel"
              bordered={false}
              prefix={<SearchOutlined />}
            />
            <RangePicker bordered={false} className="mr-3 w-1/3" />
            <Popover
              content={
              <div >
                <div className="mb-3">
                    <div className="flex">
                        <div className="my-auto w-1/2">
                            Erwachsene
                        </div>
                        <div className="flex mx-auto">
                            <Button className="rounded-full mr-1">-</Button>
                            <Input className="w-8 h-8 mr-1" value={1} />
                            <Button className="rounded-full">+</Button>
                        </div>
                    </div>
                    <div className="flex mt-1">
                        <div className="my-auto w-1/2">
                            Kinder
                        </div>
                        <div className="flex mx-auto">
                            <Button className="rounded-full mr-1">-</Button>
                            <Input className="w-8 h-8 mr-1" value={1} />
                            <Button className="rounded-full">+</Button>
                        </div>
                    </div>
                    <div className="flex mt-1">
                        <div className="my-auto w-1/2">
                            Zimmer
                        </div>
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
                    <Button>
                        Zurücksetzen
                    </Button>
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
            <Button type="primary" className="bg-blue-500">
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

export default Home;
