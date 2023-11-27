import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const typeOptions = [
{
description: 'Descriptions go here.',
title: 'I\'m a contractor',
value: 'contractor'
},
{
description: 'Descriptions go here.',
title: 'I’m a project owner',
value: 'projectOwner'
},
{
description: 'Descriptions go here.',
title: 'I want to join Worldlaw',
value: 'affiliate'
}
];
export const Inputs2 = () => (
<Box sx={{ p: 3 }}>
<Stack
component={RadioGroup}
spacing={4}
>
<Stack spacing={1}>
<Typography variant="h5">
Please select one option
</Typography>
<Typography
color="text.secondary"
variant="body1"
>
SmartLaw Web3Skills LexAutomatica text goes here. Block 011
SmartLaw Web3Skills LexAutomatica text goes here. Block 012
</Typography>
</Stack>
<Stack
component={RadioGroup}
spacing={3}
>
{typeOptions.map((option, index) => {
const isDisabled = index === 2;
return (
<Paper
key={option.value}
sx={{
alignItems: 'flex-start',
display: 'flex',
p: 2
}}
variant="outlined"
>
<FormControlLabel
control={<Radio />}
disabled={isDisabled}
key={option.value}
label={(
<Box sx={{ ml: 2 }}>
<Typography
sx={{ color: isDisabled ? 'action.disabled' : 'text.primary' }}
variant="subtitle2"
>
{option.title}
</Typography>
<Typography
sx={{ color: isDisabled ? 'action.disabled' : 'text.secondary' }}
variant="body2"
>
{option.description}
</Typography>
</Box>
)}
value={option.value}
/>
</Paper>
);
})}
</Stack>
</Stack>
</Box>
);
