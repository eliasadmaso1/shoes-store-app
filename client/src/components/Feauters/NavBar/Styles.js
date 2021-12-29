import {makeStyles,alpha, fade} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme)=> ({
    appBar:{
        boxShadow:'none',
        backgroundColor:'white',
        borderBottom:'1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft:drawerWidth,
        },
    },
    navbar:{
        marginTop:"15px",
        boxShadow:'none',
        backgroundColor:'white',
        borderBottom:'1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft:drawerWidth,
        },
        

    },
    title:{
        flexGrow:1,
        alignItems:'center',
        display: 'flex',
        textDecoration:'none',
        color:'black',
        justifyContent:'center',
        justifyContent:'space-evenly',
        marginLeft:'28.5%',
        background: "rgb(246 246 246)",
        
       
        
    },
    
    image:{
        marginRight:'10px',
       

    },
    menuButton:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display: 'none',
        },
    },
    grow:{
        flexGrow:1,
    },
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white,0.15),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white,0.25)
        },
        marginRight:theme.spacing(2),
        marginLeft:0,
        width: '100px',
        [theme.breakpoints.up('sm')]:{
            width: 'auto',
        },
    },
    searchIcon:{
        padding: theme.spacing(0,2),
        height: '100px',
        position: 'absolute',
        pointerEvents:'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    },
    inputRoot:{
        color: 'inherit',
    },
    inputInput:{
        padding: theme.spacing(1,1,1,0),
        paddingLeft:`calc(1rem + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]:{

        },
    },
}));
   
  
 