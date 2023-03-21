import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            color: 'white',
            backgroundColor: 'black',
            width: 300,
            height: 40,
            borderRadius: 40,
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            color: 'black',
            border: '1px solid black',
            borderRadius: 40,
          },
        },
        {
          props: { variant: 'icon-button' },
          style: {
            // color: 'blue',
            // border: '1px solid black',
            // borderRadius: 40,
          },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});

export { Theme };
