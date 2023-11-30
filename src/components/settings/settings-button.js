import PropTypes from 'prop-types';
// import Settings01Icon from '@untitled-ui/icons-react/build/esm/Settings01';
import Settings02Icon from '@untitled-ui/icons-react/build/esm/Settings02';
// import Settings03Icon from '@untitled-ui/icons-react/build/esm/Settings03';
// import Settings04Icon from '@untitled-ui/icons-react/build/esm/Settings04';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';

export const SettingsButton = (props) => (
  <Tooltip title="Settings">
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: '50%',
        bottom: 0,
        boxShadow: 16,
        margin: (theme) => theme.spacing(4),
        position: 'fixed',
        right: 0,
        zIndex: (theme) => theme.zIndex.speedDial
      }}
      {...props}>
      <ButtonBase
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '50%',
          color: 'primary.contrastText',
          p: '10px'
        }}
      >
        <SvgIcon>
          <Settings02Icon />
        </SvgIcon>
      </ButtonBase>
    </Box>
  </Tooltip>
);

SettingsButton.propTypes = {
  onClick: PropTypes.func
};
