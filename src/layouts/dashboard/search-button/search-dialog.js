import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import XIcon from '@untitled-ui/icons-react/build/esm/X';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Tip } from 'src/components/tip';
import { wait } from 'src/utils/wait';
const articles = {
Platform: [
{
description: 'Descriptions go here.',
title: 'Level up your site search experience with our hosted API',
path: 'Users / Api-usage'
},
{
description: 'Descriptions go here.',
title: 'Build performant marketplace search at scale',
path: 'Users / Api-usage'
}
],
Resources: [
{
description: 'Descriptions go here.',
title: 'Web3 Legal Engineering',
path: 'Resources / Blog posts'
},
{
description: 'Descriptions go here.',
title: 'Build performance',
path: 'Resources / UI libraries'
}
]
};
export const SearchDialog = (props) => {
const { onClose, open = false, ...other } = props;
const [value, setValue] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [displayArticles, setDisplayArticles] = useState(false);
const handleSubmit = useCallback(async (event) => {
event.preventDefault();
setDisplayArticles(false);
setIsLoading(true);
// Do search here
await wait(1500);
setIsLoading(false);
setDisplayArticles(true);
}, []);
return (
<Dialog
fullWidth
maxWidth="sm"
onClose={onClose}
open={open}
{...other}>
<Stack
alignItems="center"
direction="row"
justifyContent="space-between"
spacing={3}
sx={{
px: 3,
py: 2
}}
>
<Typography variant="h6">
Search
</Typography>
<IconButton
color="inherit"
onClick={onClose}
>
<SvgIcon>
<XIcon />
</SvgIcon>
</IconButton>
</Stack>
<DialogContent>
<Tip message="Search by entering a keyword and pressing Enter" />
<Box
component="form"
onSubmit={handleSubmit}
sx={{ mt: 3 }}
>
<TextField
fullWidth
InputProps={{
startAdornment: (
<InputAdornment position="start">
<SvgIcon>
<SearchMdIcon />
</SvgIcon>
</InputAdornment>
)
}}
label="Search"
onChange={(event) => setValue(event.target.value)}
placeholder="Search..."
value={value}
/>
</Box>
{isLoading && (
<Box
sx={{
display: 'flex',
justifyContent: 'center',
mt: 3
}}
>
<CircularProgress />
</Box>
)}
{displayArticles && (
<Stack
spacing={2}
sx={{ mt: 3 }}
>
{Object.keys(articles).map((type, index) => (
<Stack
key={index}
spacing={2}
>
<Typography variant="h6">
{type}
</Typography>
<Stack
divider={<Divider />}
sx={{
borderColor: 'divider',
borderRadius: 1,
borderStyle: 'solid',
borderWidth: 1
}}
>
{articles[type].map((article, index) => (
<Box
key={article.title}
sx={{ p: 2 }}
>
<Stack
alignItems="center"
direction="row"
spacing={2}
sx={{ pl: 1 }}
>
<Badge
color="primary"
variant="dot"
/>
<Typography variant="subtitle1">
{article.title}
</Typography>
</Stack>
<Typography
color="text.secondary"
variant="body2"
>
{article.path}
</Typography>
<Typography
color="text.secondary"
variant="body2"
sx={{ mt: 1 }}
>
{article.description}
</Typography>
</Box>
))}
</Stack>
</Stack>
))}
</Stack>
)}
</DialogContent>
</Dialog>
);
};
SearchDialog.propTypes = {
onClose: PropTypes.func,
open: PropTypes.bool
};
