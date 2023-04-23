import { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarCard = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const handleDateChange =(e) =>{
        setCurrentDate(e);
    }
    return (
        <div>
            <Calendar onChange={handleDateChange} value={currentDate} className="bg-green-700 text-white p-4 rounded-md font-bold" 
            tileClassName={({ date, view }) =>
            view === 'month' && date.toDateString() === currentDate.toDateString()
              ? 'bg-white text-gray-700 font-bold rounded-full'
              : ''
          }/>   
        </div>
    )
}

export default CalendarCard;