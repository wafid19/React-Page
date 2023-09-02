import React from "react";
import UpperBtn from "../Component/UpperBtn/UpperBtn";
import VideoGrid from "../Component/Video-Grid/videoGrid";
import Pagination from "../Component/Pagination/Pagination";

class Mainpage extends React.Component{
    render(){
        return(
            <>
            <UpperBtn/>
            <VideoGrid/>
            <Pagination/>
            </>
        )
    }
}

export default Mainpage;