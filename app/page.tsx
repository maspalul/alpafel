import SliderBanner from "./components/SliderBanner";
import SliderProducts from "./components/SliderProducts";


export default function Home() {
  return (
    <main className="lg:px-[10%]">
      <SliderBanner />
      <SliderProducts title="Best Sellers Product" />
      <SliderProducts title="New Arrival" />
      <SliderProducts title="Lubricant" />
    </main>
  );
}
