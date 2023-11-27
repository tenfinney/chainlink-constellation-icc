import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
export const Form6 = () => {
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
return (
<Box sx={{ p: 3 }}>
<form onSubmit={(event) => event.preventDefault()}>
<Stack spacing={3}>
<TextField
fullWidth
label="Title"
name="title"
/>
<TextField
fullWidth
label="Description"
name="description"
/>
<div>
<FormControlLabel
control={<Switch name="allDay" />}
label="All day"
/>
</div>
<DateTimePicker
onChange={(newDate) => setStartDate(newDate)}
label="Start date"
value={startDate}
/>
<DateTimePicker
onChange={(newDate) => setEndDate(newDate)}
label="End date"
value={endDate}
/>
</Stack>
<Divider sx={{ my: 3 }} />
<Box
sx={{
alignItems: 'center',
display: 'flex'
}}
>
<Box sx={{ flexGrow: 1 }} />
<Button color="inherit">
Cancel
</Button>
<Button
sx={{ ml: 1 }}
type="submit"
variant="contained"
>
Confirm
</Button>
</Box>
</form>
</Box>
);
};
