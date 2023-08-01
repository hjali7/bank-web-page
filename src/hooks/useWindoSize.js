import { useState , useEffect } from "react";
const useWindoSize = () => {
    const [width , setWidth] = useState({
        width : ''
    })

    useEffect(()=>{
        const handleSize = e => {
            setWidth({
                width : window.innerWidth ,
            })
        }
        handleSize()
        window.addEventListener('resize' ,handleSize)
        return  ()=>window.removeEventListener("resize",handleSize )
    },[])

    return width
}

export default useWindoSize