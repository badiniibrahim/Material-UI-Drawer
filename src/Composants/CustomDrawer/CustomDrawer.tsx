import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import useStyle from './CustomDrawerStyle';
import { useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AnnouncementIcon from '@material-ui/icons/Announcement';

type Props = {
    open: boolean
}

const CustomDrawer: React.FC<Props> = (Props) => {

    const theme = useTheme();
    const classes = useStyle();
    const { open } = Props


    const listitems = [
        {
            text: "Dashboard",
            icon: <DashboardIcon />
        },
        {
            text: "About",
            icon: <InfoIcon/>
           
        },
        {
            text: "Contact",
            icon: <ContactMailIcon/>
        }
        ,
        {
            text: "Announcement",
            icon: <AnnouncementIcon/>
        }
    ]

    return(
        <Drawer
            variant="persistent"
            open={open}
            anchor="left"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => {}}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
        <Divider />

        <List>
            {listitems.map((item, index) => {
                const { text, icon } = item;
                return(
                    <ListItem button key={index}>
                        <ListItemText primary={text}/>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    </ListItem>
                )
            })}
        </List>      
    </Drawer>
    )
}

export default CustomDrawer;