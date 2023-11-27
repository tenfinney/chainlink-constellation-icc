import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
// import { paths } from 'src/paths';
const issuers = {
bashtrans: '/assets/logos/bash.png',
stacklogos001: '/assets/logos/stack-logos-001.png',
stacklogos002: '/assets/logos/stack-logos-002.png',
stacklogos006: '/assets/logos/stack-logos-006.png',
stacklogos008: '/assets/logos/stack-logos-008.png',
stacklogos010: '/assets/logos/stack-logos-010.png',
stacklogos013: '/assets/logos/stack-logos-013.png',
stacklogos019: '/assets/logos/stack-logos-019.png',
stacklogos021: '/assets/logos/stack-logos-021.png',
stacklogos022: '/assets/logos/stack-logos-022.png'


};
export const AuthIssuer = (props) => {
const { issuer: currentIssuer } = props;
return (
<Box
sx={{
borderColor: 'divider',
borderRadius: 2.5,
borderStyle: 'solid',
borderWidth: 1,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
p: 3
}}
>
<Typography variant="body2">
Visit our
{' '}
<Link
component="a"
// href={paths.docs}
href="https://tokens.freeweb3.com"
target="_blank"
underline="hover"
variant="subtitle2"
>
Digital Artifact Minter
</Link>
{' '}
SmartLaw Web3Skills LexAutomatica text goes here. Block 005
</Typography>
<Stack
alignItems="center"
direction="row"
gap={3}
sx={{ mt: 2 }}
>
{Object.keys(issuers).map((issuer) => {
const isCurrent = issuer === currentIssuer;
const icon = issuers[issuer];
return (
<Tooltip
key={issuer}
title={issuer}
>
<Box
component="img"
src={icon}
sx={{
height: 30,
'&:not(:hover)': {
...(!isCurrent && {
filter: 'grayscale(100%)'
})
}
}}
/>
</Tooltip>
);
})}
</Stack>
</Box>
);
};
AuthIssuer.propTypes = {
issuer: PropTypes.string.isRequired
};
