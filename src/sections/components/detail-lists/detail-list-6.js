import Markdown from 'react-markdown';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
const MarkdownWrapper = styled('div')(({ theme }) => ({
color: theme.palette.text.primary,
fontFamily: theme.typography.fontFamily,
'& p': {
margin: 0
},
'& p+p': {
marginTop: theme.spacing(2)
}
}));
const description = `
SmartLaw Web3Skills LexAutomatica text goes here. Block 006
SmartLaw Web3Skills LexAutomatica text goes here. Block 007
SmartLaw Web3Skills LexAutomatica text goes here. Block 062
SmartLaw Web3Skills LexAutomatica text goes here. Block 061
`;
export const DetailList6 = () => {
const tags = ['React JS'];
return (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<CardContent>
<Stack spacing={3}>
<Stack spacing={1}>
<Typography
color="text.secondary"
variant="overline"
>
Project Name
</Typography>
<Typography variant="subtitle2">
PDF Export App
</Typography>
</Stack>
<Stack spacing={1}>
<Typography
color="text.secondary"
variant="overline"
>
Tags
</Typography>
<div>
{tags.map((tag) => (
<Chip
key={tag}
label={tag}
variant="outlined"
/>
))}
</div>
</Stack>
<Stack spacing={1}>
<Typography
color="text.secondary"
variant="overline"
>
Description
</Typography>
<MarkdownWrapper>
<Markdown>
{description}
</Markdown>
</MarkdownWrapper>
</Stack>
</Stack>
</CardContent>
</Card>
</Box>
);
};
