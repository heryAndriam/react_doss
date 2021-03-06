import React from 'react'
import { Grid, Paper } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Listitem({title,width,text,icon,pop}) {
  return (
    <Grid container style={{justifyContent:"center"}} >
        <Paper   sx={{ width: '100%', maxWidth: width, bgcolor: 'background.paper'}}>
        <List
            sx={{ width: '100%', maxWidth: width, bgcolor: 'background.paper'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                {title}
            </ListSubheader>
            }
            >
            <ListItemButton><ListItemIcon>{icon} {pop}</ListItemIcon><ListItemText primary={text}/></ListItemButton>
         </List>
         </Paper>
    </Grid>
  )
}
