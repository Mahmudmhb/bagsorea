import Bannar from "@/components/home/Bannar/Bannar";
import NewArrivals from "../../../components/home/NewArrivals/NewArrivals";
import ShopByCategory from "@/components/home/Category/Category";
import BagsSection from "@/components/home/BagsSection/BagsSection";
import ReviewSection from "@/components/home/ReviewSection/ReviewSection";

const HomePage = () => {
  return (
    <div>
      <Bannar />
      <NewArrivals />
      <ShopByCategory />
      <BagsSection />
      <ReviewSection />
    </div>
  );
};

export default HomePage;
