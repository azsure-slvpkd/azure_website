import Hero from "./components/hero";

export default function App() {
  return (
    <div className="bg-white lg:pb-12">
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-2 md:px-4">
          <Hero />
        </div>
      </div>
    </div>
  );
}
