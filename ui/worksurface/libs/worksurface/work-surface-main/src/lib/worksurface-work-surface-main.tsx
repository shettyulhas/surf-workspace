import styles from './worksurface-work-surface-main.module.css';
import {Box, Grid, Paper, styled} from "@mui/material";

/* eslint-disable-next-line */
export interface WorkSurfaceMainProps {}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '58rem'
}));

export function WorkSurfaceMain(
  props: WorkSurfaceMainProps
) {
  return (
    <div className={styles['container']}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item>Grid #1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Grid #2</Item>
          </Grid>
          <Grid item xs={3}>
            <Item>Grid #3</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default WorkSurfaceMain;
