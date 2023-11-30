import { useCallback } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import CreditCard01Icon from '@untitled-ui/icons-react/build/esm/CreditCard01';
import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';
import User03Icon from '@untitled-ui/icons-react/build/esm/User03';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { RouterLink } from 'src/components/router-link';
import { useAuth } from 'src/hooks/use-auth';
import { useMockedUser } from 'src/hooks/use-mocked-user';
import { useRouter } from 'src/hooks/use-router';
import { paths } from 'src/paths';
import { Issuer } from 'src/utils/auth';
export const AccountPopover = (props) => {
const { anchorEl, onClose, open, ...other } = props;
const router = useRouter();
const auth = useAuth();
const user = useMockedUser();
const handleLogout = useCallback(async () => {
try {
onClose?.();
switch (auth.issuer) {
case Issuer.Amplify: {
await auth.signOut();
break;
}
case Issuer.Auth0: {
await auth.logout();
break;
}
case Issuer.Firebase: {
await auth.signOut();
break;
}
case Issuer.JWT: {
await auth.signOut();
break;
}
default: {
console.warn('Using an unknown Auth Issuer, did not log out');
}
}
router.push(paths.index);
} catch (err) {
console.error(err);
toast.error('Something went wrong!');
}
}, [auth, router, onClose]);
return (
<Popover
anchorEl={anchorEl}
anchorOrigin={{
horizontal: 'center',
vertical: 'bottom'
}}
disableScrollLock
onClose={onClose}
open={!!open}
PaperProps={{ sx: { width: 200 } }}
{...other}>
<Box sx={{ p: 2 }}>
<Typography variant="body1">
{user.name}
</Typography>
<Typography
color="text.secondary"
variant="body2"
>
scott@onelaw.us
</Typography>
</Box>
<Divider />
<Box sx={{ p: 1 }}>
<ListItemButton
component={RouterLink}
href={paths.dashboard.social.profile}
onClick={onClose}
sx={{
borderRadius: 1,
px: 1,
py: 0.5
}}
>
<ListItemIcon>
<SvgIcon fontSize="small">
<User03Icon />
</SvgIcon>
</ListItemIcon>
<ListItemText
primary={(
<Typography variant="body1">
Profile
</Typography>
)}
/>
</ListItemButton>
<ListItemButton
component={RouterLink}
href={paths.dashboard.account}
onClick={onClose}
sx={{
borderRadius: 1,
px: 1,
py: 0.5
}}
>
<ListItemIcon>
<SvgIcon fontSize="small">
<Settings04Icon />
</SvgIcon>
</ListItemIcon>
<ListItemText
primary={(
<Typography variant="body1">
Settings
</Typography>
)}
/>
</ListItemButton>
<ListItemButton
component={RouterLink}
href={paths.dashboard.index}
onClick={onClose}
sx={{
borderRadius: 1,
px: 1,
py: 0.5
}}
>
<ListItemIcon>
<SvgIcon fontSize="small">
<CreditCard01Icon />
</SvgIcon>
</ListItemIcon>
<ListItemText
primary={(
<Typography variant="body1">
Billing
</Typography>
)}
/>
</ListItemButton>
</Box>
<Divider sx={{ my: '0 !important' }} />
<Box
sx={{
display: 'flex',
p: 1,
justifyContent: 'center'
}}
>
<Button
color="inherit"
onClick={handleLogout}
size="small"
>
Logout
</Button>
</Box>
</Popover>
);
};
AccountPopover.propTypes = {
anchorEl: PropTypes.any,
onClose: PropTypes.func,
open: PropTypes.bool
};
