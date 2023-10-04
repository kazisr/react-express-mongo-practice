import React, {useEffect, useState} from 'react'

function App() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            },
        console.log(backendData)
    )
    }, [])
    return (
        <div>
            {(backendData.length === 0)?(
                <p>Loading...</p>
            ): (
                backendData?.users?.map((user, i) =>(
                    <p>username : {user} <div>pass : {backendData.pass[i]}</div></p>
                ))
            )}
        </div>
    )
}

export default App