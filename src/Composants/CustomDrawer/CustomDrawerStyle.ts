import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
//const theme = useTheme();

const useStyle = makeStyles((theme) =>({
    root: {
        display: 'flex',
    },
    typographieStyle: {
        flex:1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    

}));

export default useStyle;
