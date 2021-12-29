import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    root:{
        maxWidth:'300px',
        marginTop:'100px',
        marginLeft:'10%',
        background: "white",
        border:"solid 10px rgb(246 246 246)"


       
      
    },
    root1:{
        maxWidth:'300px',
        marginTop:'100px',
        marginLeft:'10%',
        backgroundColor:'rgb(246 246 246)',
        border:"solid 10px white"

    },
    media:{
        height: '100%',
        paddingTop:'76.25%',
        marginLeft:'17%',
        width: '180px',
        justifyContent:'center',
        marginTop:'5%',
        padding: '-15%'
       
   
    },
    cardActions:{
        display: 'flex',
        justifyContent:'flex-end',
    },
    cardContect:{
        display: 'flex',
        justifyContent:'space-between',
    },

}));