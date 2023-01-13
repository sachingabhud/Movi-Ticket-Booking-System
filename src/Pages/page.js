import Sidebar from "./sidebar";

function Page({...props}){
    
    return(
        <>
        <Sidebar/>
        props.child
        </>
    );
}