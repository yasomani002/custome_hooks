import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import useDataFetch from '../hooks/useDataFetch';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function ApiFetch() {
  const classes = useStyles()

  const { data } = useDataFetch('https://api.github.com/users')

  return (
    <>
      <Grid className={classes.root}>
        {data?.map((item , index) => {
          return (
            <>
              <Typography key={index}>
                {item.login}
              </Typography>
            </>
          )
        })}
      </Grid>
    </>
  )
}

export default ApiFetch