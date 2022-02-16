import React, { useState, useEffect } from 'react';
import { Container, Day, LeftArrow, RightArrow } from './CalendarStyles';

const Calendar = ({ value, setValue, startingPoint, close }) => {
    const [calendar, setCalendar] = useState([]);

    const buildCalendar = () => {
        const startDay = value.clone().startOf("month").startOf("week");
        const endDay = value.clone().endOf("month").endOf("week");
        const day = startDay.clone().subtract(1, "day");
        const calendar = [];
        
        while(day.isBefore(endDay, "day")){
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            );
        }
        
        return calendar;
    }

    useEffect(() => {
        setCalendar(buildCalendar(value));
        // eslint-disable-next-line
    }, [value]);

    function isSelected(day) {
        return value.isSame(day, "day");
    }

    // function beforeToday(day) {
    //     return day.isBefore(new Date(), "day");
    // }

    function beforeThisMonth(day, value) {
        return day.isBefore(value, "month")
    }

    function afterThisMonth(day, value) {
        return day.isAfter(value, "month")
    }

    function isToday(day) {
        return day.isSame(new Date(), "day");
    }

    function dayStyles(day, value) {
        if (beforeThisMonth(day, value)) return 'unselectable';
        if (afterThisMonth(day, value)) return 'unselectable';
        if(isSelected(day)) return 'selected';
        if(isToday(day)) return 'today';
        return "";
    }

    function currentMonthName() {
        return value.format("MMMM");
    }

    function currentYear() {
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return value.clone().add(1, "month");
    }

    // function thisMonth() {
    //     return value.isSame(new Date(), "month");
    // }

    return (
        <Container startingPoint={startingPoint}>
            <div className="header">
                <div className="previous" onClick={() => setValue(prevMonth())}>
                    <LeftArrow />
                </div>
                <div className="current">{currentMonthName()}{currentYear()}</div>
                <div className="next" onClick={() => setValue(nextMonth())}><RightArrow /></div>
            </div>
            <div className="body">
                <div className="day-names">
                    {
                        ["l", "m", "m", "j", "v", "s", "d"].map(d => (
                            <div className="week">{d}</div>
                        ))
                    }
                </div>
                {calendar.map(week => (
                    <div>
                        {week.map(day => (
                            <Day onClick={() => setValue(day)}>
                                <div 
                                    className={dayStyles(day, value)}
                                    onClick={() => close(false)}
                                >
                                    {day.format("D").toString()}
                                </div>
                            </Day>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Calendar;