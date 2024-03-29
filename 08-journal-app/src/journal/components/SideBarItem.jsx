import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useMemo } from 'react';

export const SideBarItem = ({ title, body, setActive }) => {
    const newTitle = useMemo(() => {
        return title.length > 17 ? title.substr(0, 17) + '...' : title;
    }, [title]);
    return (
        <ListItem disablePadding onClick={setActive}>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
