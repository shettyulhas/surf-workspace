import styles from './solution-list.module.css';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface SolutionListProps {
  changeSolution: any;
}

const solution1DataFile = require('../../../../../../../data/SE_State_Management_Polygons_1.json');
const solution2DataFile = require('../../../../../../../data/SE_State_Management_Polygons_2.json');

export function SolutionList(props: SolutionListProps) {
  const [value, setValue] = useState('solution1');
  const [geoData, setGeoData] = useState(solution1DataFile);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    if (value === 'solution1') {
      setGeoData(() => solution1DataFile);
    } else if (value === 'solution2') {
      setGeoData(() => solution2DataFile);
    } else {
      setGeoData(() => undefined);
    }
  }, [value]);

  const handleClick = () => props.changeSolution(geoData);

  return (
    <div className={styles['container']}>
      <FormControl>
        <FormLabel id="solution-group">Proposed Solution:</FormLabel>
        <RadioGroup
          aria-labelledby="solution-group"
          name="solution-group"
          value={value}
          onChange={handleChange}
          onClick={handleClick}
        >
          <FormControlLabel
            value="solution1"
            control={<Radio />}
            label="Solution 1"
          />
          <FormControlLabel
            value="solution2"
            control={<Radio />}
            label="Solution 2"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default SolutionList;
