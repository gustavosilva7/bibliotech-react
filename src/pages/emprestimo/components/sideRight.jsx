import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './sideRight.css'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyApp() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

function EmpresCalendar() {
    const daysTag = document.querySelector(".days"),
     currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons p");

    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) {
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) {
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        // currentDate = `${months[currMonth]}`;
        // daysTag.innerHTML = liTag;
        
    };

    renderCalendar();

    let ultimo = document.getElementById("prev")
    let prevMonth = (currMonth - 1) < 0 ? 11 : currMonth - 1;
    // ultimo.innerText = months[prevMonth];

    let prox = document.getElementById("next");
    let nextMonth = (currMonth + 1) > 11 ? 0 : currMonth + 1;
    // prox.innerText = months[nextMonth];


    prevNextIcon.forEach(icon => {
        icon.addEventListener("click", () => {

            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            let ultimo = document.getElementById("prev")
            let prevMonth = (currMonth - 1) < 0 ? 11 : currMonth - 1;
            // ultimo.innerText = months[prevMonth];
            ultimo = date.getMonth();


            let prox = document.getElementById("next");
            let nextMonth = (currMonth + 1) > 11 ? 0 : currMonth + 1;
            // prox.innerText = months[nextMonth];


            if (currMonth < 0 || currMonth > 11) {
                date = new Date(currYear, currMonth, new Date().getDate());

                currYear = date.getFullYear();
                currMonth = date.getMonth();
            } else {
                date = new Date();
            }
            renderCalendar();
        });
    });

}


export default function Right() {
    return (
        <div className="sideRight">
            

            <div className="calendario">
                <div className="wrapper">
                    <header>
                        <h2>Calendário</h2>
                        <div className="icons">
                            <p id="prev"></p>
                            <h1 className="current-date">
                                {/* ${months[currMonth]} */}
                            </h1>
                            <p id="next"></p>
                        </div>
                    </header>
                    <div className="calendar">
                        <ul className="weeks">
                            <li>Dom</li>
                            <li>Seg</li>
                            <li>Ter</li>
                            <li>Qua</li>
                            <li>Qui</li>
                            <li>Sex</li>
                            <li>Sáb</li>
                        </ul>
                        <ul className="days">
                            <EmpresCalendar />
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}