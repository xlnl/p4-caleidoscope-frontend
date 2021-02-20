import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


export default function Schedule() {
    const events = [
        { title: "Project Presentations", date: new Date() },
    ];

    return (
        <div className="App">
        <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={events}
        />
        </div>
    );
}