"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

{
  /* TEMPORARY DUMMY DATA */
}
const events = [
  {
    id: 1,
    title: "Event 1",
    time: "9:00 AM - 10:00 AM",
    description: "This is the description for Event 1",
  },
  {
    id: 2,
    title: "Event 2",
    time: "11:00 AM - 1:00 PM",
    description: "This is the description for Event 2",
  },
  {
    id: 3,
    title: "Event 3",
    time: "6:00 AM - 8:00 AM",
    description: "This is the description for Event 3",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-lg p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image
          src="/moreDark.png"
          alt="ellipse menu icon"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-lg border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-padaPurple"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
