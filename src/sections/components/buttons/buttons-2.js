import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import Trash02Icon from '@untitled-ui/icons-react/build/esm/Trash02';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
export const Buttons2 = () => (
<Box sx={{ p: 3 }}>
<Stack
alignItems="center"
direction="row"
spacing={3}
>
<Button
color="error"
size="small"
startIcon={(
<SvgIcon>
<Trash02Icon />
</SvgIcon>
)}
variant="contained"
>
Delete Account
</Button>
<Button
endIcon={(
<SvgIcon>
<ArrowRightIcon />
</SvgIcon>
)}
size="small"
variant="contained"
>
Next Page
</Button>
</Stack>
</Box>
);
