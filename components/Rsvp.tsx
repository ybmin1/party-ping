"use client";

import Image from "next/image";
import { useState } from "react";

export default function Rsvp() {
  const [attendance, setAttendance] = useState("yes");

  const handleAttendanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttendance(e.target.value);
  };

  return (
    <section className="bg-cream flex justify-center font-lacquer text-darkgrey">
      <div className="w-full min-w-[360px] max-w-[430px] h-screen flex flex-col justify-start items-center">
        <div
          className="w-full h-[220px] flex items-end rotate-180"
          style={{
            backgroundImage: "url('/images/circle-bg.png')",
          }}
        >
          <div
            className="w-full h-[170px] flex justify-center items-center "
            style={{
              backgroundImage: "url('/images/circle.png')",
            }}
          >
            <div className="text-center text-5xl space-y-4 rotate-180">
              <div>rsvp</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 w-full text-center p-4 gap-6">
          <p className="text-base">
            please respond by 10th april. <br />
            let us know if you can join our party.
          </p>
          <form className="space-y-6 text-xl">
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col items-center cursor-pointer">
                <div className="relative w-[80px] h-[80px]">
                  {attendance === "yes" && (
                    <Image
                      src="/images/tomato-filling.png"
                      alt="tomato-filling"
                      width={80}
                      height={80}
                      className="absolute inset-0 z-0"
                    />
                  )}

                  <Image
                    src="/images/tomato-outline.png"
                    alt="tomato-outline"
                    width={80}
                    height={80}
                    className="absolute inset-0 z-40"
                  />
                </div>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  className="sr-only"
                  onChange={handleAttendanceChange}
                  required
                />
                I will
                <br /> be attending
              </label>
              <label className="flex flex-col items-center cursor-pointer">
                <div className="relative w-[80px] h-[80px]">
                  {attendance === "no" && (
                    <Image
                      src="/images/tomato-filling.png"
                      alt="tomato-filling"
                      width={80}
                      height={80}
                      className="absolute inset-0 z-0"
                    />
                  )}
                  <Image
                    src="/images/tomato-outline.png"
                    alt="tomato-outline"
                    width={80}
                    height={80}
                    className="absolute inset-0 z-40"
                  />
                </div>
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  className="sr-only"
                  onChange={handleAttendanceChange}
                />
                I will not
                <br /> be attending
              </label>
            </div>

            <div className="flex flex-col text-start gap-1">
              <input
                name="name"
                placeholder="name"
                className="w-full text-base border-2 border-darkgrey rounded-sm pl-1"
                required
              />
              <input
                name="kids"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="number of kids"
                className="w-full text-base border-2 border-darkgrey rounded-sm pl-1"
              />
              <textarea
                name="message"
                placeholder="message (allergy/etc)"
                className="w-full text-base border-2 border-darkgrey rounded-sm pl-1"
              />
            </div>
            <button className="w-full h-12 bg-mint rounded-3xl cursor-pinter">
              reply now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
