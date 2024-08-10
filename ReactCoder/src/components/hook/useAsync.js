import { useEffect, useState } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true)
        asyncFunction()
        .then((data)=>{
            setData(data)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=> {
            setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return {
        data,
        loading,
        error
    }
}