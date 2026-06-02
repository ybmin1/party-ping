export default function Cover() {
  return (
    <section className="bg-background flex justify-center">
      <div
        className="w-full min-w-[360px] max-w-[430px] h-screen flex justify-center items-center"
        style={{
          backgroundImage:
            "url('/images/tomatos.png'), url('/images/dots.png')",
          backgroundSize: "430px 230px, 360px 200px",
          backgroundRepeat: "repeat, repeat",
        }}
      >
        <div
          className="flex justify-center items-center w-full aspect-9/20 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: "url('/images/circle-cover.png')",
          }}
        >
          <div className="text-center font-lacquer text-primary-text text-xl space-y-4">
            <div>join us to celebrate</div>
            <div>
              <div className="font-madimi text-6xl">Lily&apos;s</div>
              <div className="text-4xl">Birthday</div>
            </div>
            <div>
              <div>Tuesday, July at 11am</div>
              <div>Woodlane House</div>
              <div>MainRoad, SW11 7DD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
