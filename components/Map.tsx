import GoogleMap from "./GoogleMap";

export default function Map() {
  return (
    <section className="bg-cream flex justify-center">
      <div className="w-full min-w-[360px] max-w-[430px] h-screen flex flex-col justify-center items-center relative">
        <GoogleMap />
        <div
          className="w-full h-[250px] flex items-end absolute bottom-0 left-0"
          style={{
            backgroundImage: "url('/images/circle-bg.png')",
          }}
        >
          <div
            className="w-full h-[210px] flex justify-center items-center "
            style={{
              backgroundImage: "url('/images/circle.png')",
            }}
          >
            <div className="text-center font-lacquer text-darkgrey text-xl space-y-2">
              <div>Parking</div>
              <div className="text-base">🚗 Free on-site parking available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
