import { useState } from "react";



const ExempleUseEffect = () => {
    const [resouseType, setResourseType] = useState("posts")

    const changeResourseType = (resouseType) => {
        setResourseType(resouseType)
    }

    return ( 
        <div className="mt-10">
            <h1 className="font-bold text-center border-slate-500 border-2 rounded">{resouseType}</h1>
            <div className="flex justify-between">
                <button onClick={() => changeResourseType("Posts")} 
                className="my-1 p-2 bg-slate-500 text-white rounded hover:bg-slate-800">Posts</button>
                <button onClick={() => changeResourseType("Comments")} 
                className="my-1 p-2 bg-slate-500 text-white rounded hover:bg-slate-800">Comments</button>
                <button onClick={() => changeResourseType("All")} 
                className="my-1 p-2 bg-slate-500 text-white rounded hover:bg-slate-800">All</button>
            </div>
        </div>
     );
}
 
export default ExempleUseEffect;