import footerimg from "./back.avif"
function Footer()
{
    return(
        <>
        <div className="footerback" style={{width:"100%",height:"300px",backgroundImage:`url(${footerimg})`,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",overflow:"hidden",paddingLeft:"100px",paddingRight:"100px"}}>
            <div style={{height:"300px",width:"100%",marginTop:"20px",marginBottom:"20px",borderRadius:"20px",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1 style={{color:"white",fontSize:"x-large",fontWeight:"bolder"}}>Web dev mini project</h1>
            <h1 style={{color:"white",fontSize:"larger",fontWeight:"bold"}}><br/>Made by<br/>Unnati Hassanandani<br/>Vanshika Shah<br/>Vea Ranawat</h1>     
            </div>
            </div>
        </>
    );
}
export default Footer;