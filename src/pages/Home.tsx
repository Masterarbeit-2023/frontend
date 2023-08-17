import WelcomePanel from "../components/home/WelcomePanel";
import HotelOverview from "../components/home/HotelOverview";
import RoomOverview from "../components/home/RoomOverview";
import RestaurantOverview from "../components/home/RestaurantOverview";
import SpaOverview from "../components/home/SpaOverview";
import Footer from "../components/home/Footer";
import Container from "../components/Container";

const Home = () => {

    return (
        <div>
            <WelcomePanel />
            <Container>
            <HotelOverview />
            <RoomOverview />
            <RestaurantOverview />
            <SpaOverview />
            </Container>
            
            <Footer />
        </div>
    );
}

export default Home;