import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useTheme } from '@material-ui/core/styles';
import useStyle from './MainContainerStyle';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import CustomDrawer from '../../Composants/CustomDrawer';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AnnouncementIcon from '@material-ui/icons/Announcement';


const MainContainer: React.FC<{}> = () => {

    const classes = useStyle();
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

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
        <div className={classes.root}> 
            <AppBar  position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                  })} >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}>
                            <MenuIcon/>
                        </IconButton>
                    <Typography className={classes.typographieStyle} variant="h6" noWrap>Material-ui-drawer</Typography>
                    <GitHubIcon/>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                open={open}
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
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
            <main
                className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
            </main>
        </div>
    );
};
export default MainContainer;