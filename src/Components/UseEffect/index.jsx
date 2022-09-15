import { useState, useEffect } from "react";



const ExempleUseEffect = () => {
    const [resourceType, setResourseType] = useState("posts")
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchResourceTypes = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            const responseJSON = await response.json()

            setItems(responseJSON)
        }

        fetchResourceTypes()
    }, [resourceType])
    

    const changeResourseType = (resourceType) => {
        setResourseType(resourceType)
    }

    return ( 
        <div className="mt-10 w-96">
            <h1 className="font-bold text-center border-slate-500 border-2 rounded">{resourceType}</h1>
            <div className="flex justify-between">
                <button onClick={() => changeResourseType("Posts")} 
                className="my-1 p-2 bg-slate-500 text-white rounded hover:bg-slate-800">Posts</button>
                <button onClick={() => changeResourseType("Comments")} 
                className="my-1 p-2 bg-slate-500 text-white rounded hover:bg-slate-800">Comments</button>
                <button onClick={() => changeResourseType("Todos")} 
                className="my-1 p-2 bg-slate-500 text-white rounded hover:bg-slate-800">To-dos</button>
            </div>
            <div className="mt-5">
                {items.map((item) => (
                <p>{item.name}{item.title}</p>
                ))}
            </div>
        </div>
     );
}
 
export default ExempleUseEffect;