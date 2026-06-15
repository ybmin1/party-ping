export default function Map() {
  return (
    <section className="bg-cream flex justify-center">
      <div className="w-full min-w-[360px] max-w-[430px] h-screen flex justify-center items-end">
        <div
          className="w-full h-[290px] flex items-end"
          style={{
            backgroundImage: "url('/images/circle-bg.png')",
          }}
        >
          <div
            className="w-full h-[250px] flex justify-center items-center "
            style={{
              backgroundImage: "url('/images/circle.png')",
            }}
          >
            <div className="text-center font-lacquer text-darkgrey text-xl space-y-4">
              <div>Time</div>
              <div>Parking</div>
              <div>Get Directions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
