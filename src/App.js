import React, { useState } from 'react';
//MATERIAL-UI ( DATE PICKER )
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TimePicker from '@mui/lab/TimePicker';


function App() {
    const [ date, setDate ] = useState(new Date());
    const handleDate = (date) => setDate(date);


    const [ time, setTime ] = useState("2014-08-18T21:00:00");
    const handleTime = (time) => setTime(time);


    const [ colorpicker, setColorpicker ] = useState("#FFFFFF");


    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                    label="Start"
                    value={date}
                    onChange={handleDate}
                    inputFormat="MMMM dd, yyyy"
                    renderInput={(params) => <TextField {...params}/>}
                />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label="Start"
                    value={time}
                    onChange={handleTime}
                    renderInput={(params) => <TextField {...params}/>}
                />
            </LocalizationProvider>

            <input
                type="color"
                value={colorpicker}
                onChange={(e) => setColorpicker(e.target.value)}
            />
        </>
    )
}

export default App;