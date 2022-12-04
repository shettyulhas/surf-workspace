import styles from './work-surface-tool.module.css';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import { polygon } from 'polygon-tools';

/* eslint-disable-next-line */
export interface WorkSurfaceToolProps {
  geoData: any;
}

export function WorkSurfaceTool(props: WorkSurfaceToolProps) {
  const [tool, setTool] = useState('union');
  const [polygonArea, setPolygonArea] = useState<number>(0);
  const [toolValue, setToolValue] = useState([]);

  const handleToolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTool((event.target as HTMLInputElement).value);
    console.log(`Tool value: ${(event.target as HTMLInputElement).value}`);
    console.log(`Tool set: ${tool}`);
  };

  const handleApplyClick = () => {
    if (tool === 'union') {
      const unionVal = polygon.union(
        props.geoData.features[0].geometry.coordinates[0],
        props.geoData.features[1].geometry.coordinates[0],
        props.geoData.features[2].geometry.coordinates[0]
      );
      setToolValue(unionVal);
    } else if (tool === 'intersect') {
      const intersectVal = polygon.intersection(
        props.geoData.features[0].geometry.coordinates[0],
        props.geoData.features[1].geometry.coordinates[0],
        props.geoData.features[2].geometry.coordinates[0]
      );
      setToolValue(intersectVal);
    }
  };

  useEffect(() => {
    if (props.geoData) {
      setPolygonArea(
        polygon.area(props.geoData.features[0].geometry.coordinates[0])
      );
    } else {
      setPolygonArea(0);
    }
  }, [props.geoData]);

  useEffect(() => {
    setPolygonArea(polygonArea);
  }, [tool]);

  return (
    <div className={styles['container']}>
      <Grid container spacing={3}>
        <Grid item xs={15}>
          <Paper>
            <Typography>Statistics:</Typography>
            <Typography>{`Area: ${polygonArea}`}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={15}>
          <Paper>
            <FormControl style={{ paddingBottom: '2rem' }}>
              <FormLabel id="tool-group">Tool:</FormLabel>
              <RadioGroup
                name="tool-group"
                defaultValue={'union'}
                onChange={handleToolChange}
              >
                <FormControlLabel
                  value="union"
                  control={<Radio />}
                  label="Union"
                />
                <FormControlLabel
                  value="intersect"
                  control={<Radio />}
                  label="Intersect"
                />
              </RadioGroup>
              <Button id="applyToolOption" onClick={handleApplyClick}>
                {' '}
                Apply{' '}
              </Button>
              <div
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '26rem',
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  style={{ wordWrap: 'break-word' }}
                >
                  {`Value: ${toolValue}`}
                </Typography>
              </div>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkSurfaceTool;
