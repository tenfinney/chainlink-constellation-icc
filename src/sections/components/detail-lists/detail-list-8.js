import BookOpen01Icon from '@untitled-ui/icons-react/build/esm/BookOpen01';
import Briefcase01Icon from '@untitled-ui/icons-react/build/esm/Briefcase01';
import Home02Icon from '@untitled-ui/icons-react/build/esm/Home02';
import Mail01Icon from '@untitled-ui/icons-react/build/esm/Mail01';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
export const DetailList8 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Card>
<CardHeader title="About" />
<CardContent>
<Typography
color="text.secondary"
variant="subtitle2"
>
&quot;
SmartLaw Web3Skills LexAutomatica text goes here. Block 008
changing himself.
&quot;
</Typography>
<List>
<ListItem
disableGutters
divider
>
<ListItemAvatar>
<SvgIcon color="action">
<Briefcase01Icon />
</SvgIcon>
</ListItemAvatar>
<ListItemText
disableTypography
primary={(
<Typography variant="subtitle2">
Product Designer at
{' '}
<Link
color="text.primary"
href="#"
variant="subtitle2"
>
LexAutomatico_1
</Link>
</Typography>
)}
secondary={(
<Typography
color="text.secondary"
variant="caption"
>
Past: UX Designer
{' '}
<Link
color="text.secondary"
href="#"
variant="caption"
>
Web3 Legal Engineering
</Link>
</Typography>
)}
/>
</ListItem>
<ListItem
disableGutters
divider
>
<ListItemAvatar>
<SvgIcon color="action">
<BookOpen01Icon />
</SvgIcon>
</ListItemAvatar>
<ListItemText
primary={(
<Link
color="text.secondary"
sx={{ cursor: 'pointer' }}
variant="body2"
>
Add education
</Link>
)}
/>
</ListItem>
<ListItem
disableGutters
divider
>
<ListItemAvatar>
<SvgIcon color="action">
<Home02Icon />
</SvgIcon>
</ListItemAvatar>
<ListItemText
disableTypography
primary={(
<Typography variant="subtitle2">
Lives in
{' '}
<Link
color="text.primary"
href="https://www.ocpll.org/"
variant="subtitle2"
>
Orange County CA USA
</Link>
</Typography>
)}
secondary={(
<Typography
color="text.secondary"
variant="caption"
>
Originally from 
{' '}
<Link
color="text.secondary"
href="https://www.occourts.org/"
variant="caption"
>
Orange County CA USA
</Link>
</Typography>
)}
/>
</ListItem>
<ListItem
disableGutters
divider
>
<ListItemAvatar>
<SvgIcon color="action">
<Mail01Icon />
</SvgIcon>
</ListItemAvatar>
<ListItemText
primary={(
<Typography variant="subtitle2">
scott@onelaw.us
</Typography>
)}
/>
</ListItem>
</List>
</CardContent>
</Card>
</Box>
);
