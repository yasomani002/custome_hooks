import React from 'react'
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import useCustomeHooks from '../hooks/useCustomeHooks';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

function Login() {
  const classes = useStyles()

  const { data } = useCustomeHooks('https://api.github.com/users')

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

export default Login