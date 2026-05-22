import { ContactSection } from "./components/ContactSection";
import { EntertainersSection } from "./components/EntertainersSection";
import { EventsSection } from "./components/EventsSection";
import { FoodDrinksSection } from "./components/FoodDrinksSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InstagramSection } from "./components/InstagramSection";
import { VipSection } from "./components/VipSection";

export default function App() {
  return (
    <>
      <div className="film-grain" aria-hidden />
      <Header />
      <main>
        <Hero />
        <VipSection />
        <EntertainersSection />
        <FoodDrinksSection />
        <EventsSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
