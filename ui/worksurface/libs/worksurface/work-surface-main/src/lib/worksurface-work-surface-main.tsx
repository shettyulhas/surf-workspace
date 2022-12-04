import styles from './worksurface-work-surface-main.module.css';
import {Box, Grid, Paper, styled} from "@mui/material";
import WorkSurfaceMap from "./components/work-surface-map/work-surface-map";
import SolutionList from "./components/solution-list/solution-list";
import WorkSurfaceTool from "./components/work-surface-tool/work-surface-tool";
import Map from "./components/work-surface-map/work-surface-map";
import {SetStateAction, useEffect, useState} from "react";
import {GeoJsonObject} from "geojson";

/* eslint-disable-next-line */
export interface WorkSurfaceMainProps {
}

export const Item = styled(Paper)(({theme}) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '58rem'
}));

export function WorkSurfaceMain(
  props: WorkSurfaceMainProps
) {

  const [solution, setSolution] = useState<GeoJsonObject | GeoJsonObject[] | undefined>(undefined);


  return (
    <div className={styles['container']}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item><SolutionList changeSolution={(solution: SetStateAction<GeoJsonObject | GeoJsonObject[] | undefined>) => setSolution(solution)}></SolutionList></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><WorkSurfaceMap orgSolutionFile={solution}></WorkSurfaceMap></Item>
          </Grid>
          <Grid item xs={3}>
            <Item><WorkSurfaceTool geoData={solution}></WorkSurfaceTool></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default WorkSurfaceMain;
