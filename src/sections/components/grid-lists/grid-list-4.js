import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const applicants = [
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-09.png',
commonContacts: 12,
cover: '/assets/covers/minimal-1-4x4-small.png',
name: 'User 010I',
skills: [
'UX',
'Frontend development',
'HTML5',
'VueJS',
'ReactJS'
]
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-05.png',
commonContacts: 17,
cover: '/assets/covers/abstract-1-4x4-small.png',
name: 'User 003f',
skills: [
'Backend development',
'Premier Database',
'MongoDB',
'ExpressJS'
]
},
{
id: '0x1234567890123456789012345678901234567890SS',
avatar: '/assets/avatars/avatar-sl-06.png',
commonContacts: 5,
cover: '/assets/covers/minimal-2-4x4-small.png',
name: 'User 004j',
skills: [
'UI',
'UX',
'Full-Stack development',
'React',
'ExpressJS'
]
}
];
export const GridList4 = () => (
<Box
sx={{
backgroundColor: (theme) => theme.palette.mode === 'dark'
? 'neutral.800'
: 'neutral.100',
p: 3
}}
>
<Grid
container
spacing={3}
>
{applicants.map((applicant) => (
<Grid
key={applicant.id}
md={4}
xs={12}
>
<Card sx={{ height: '100%' }}>
<CardMedia
image={applicant.cover}
sx={{ height: 200 }}
/>
<CardContent sx={{ pt: 0 }}>
<Box
sx={{
display: 'flex',
justifyContent: 'center',
mb: 2,
mt: '-50px'
}}
>
<Avatar
alt="Applicant"
src={applicant.avatar}
sx={{
border: '3px solid #FFFFFF',
height: 100,
width: 100
}}
/>
</Box>
<Link
align="center"
color="text.primary"
sx={{ display: 'block' }}
underline="none"
variant="h6"
>
{applicant.name}
</Link>
<Typography
align="center"
variant="body2"
color="text.secondary"
>
{applicant.commonContacts}
{' '}
contacts in common
</Typography>
<Divider sx={{ my: 2 }} />
<Stack
alignItems="center"
direction="row"
flexWrap="wrap"
gap={0.5}
>
{applicant.skills.map((skill) => (
<Chip
key={skill}
label={skill}
sx={{ m: 0.5 }}
variant="outlined"
/>
))}
</Stack>
</CardContent>
</Card>
</Grid>
))}
</Grid>
</Box>
);
