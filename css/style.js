import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center'
      },
      main: {
        textAlign:"center"
 
      },
      card:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        backgroundColor:"#fff",
        overflow:"hidden",
        padding:25,
        height:"100%"
      },
  
      heading:{  
        fontSize:15,
        flexDirection:"row"
  
      },
      headimg:{
        alignItems:"center",
        width: 30,
        height: 22,
        marginTop:5
      
      },
      headh3:{
        fontWeight:"600",
        fontSize:22,
        lineHeight:30,
        marginLeft:7,
        textAlign:"center"
      },
      inputIcon:{
        width:"100%",
        marginBottom:35,
        marginTop:10,
        textAlign:"center",
        justifyContent:"center"
      },
      inputField:{
        width:300,
        marginTop:20,
        padding:10,
        paddingLeft:30,
        fontSize:16,
        borderWidth:0,
        borderColor:"#cccccc",
        backgroundColor:"#ffffff",
        color:"#000000",
        borderStyle:"solid",
        borderRadius:23,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5
      },
      mainButton:{
        width:300,
        color:"#ffffff",
        textAlign:"center",
        fontSize:18,
        borderRadius:50,
        backgroundColor:"#DC143C",
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:20,
        paddingRight:20
      },
});