import React, { useEffect, useState } from 'react'

export default function UpdateUseEfeect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.warn("useEffect")
    })
    {
        return (
            <div>
                <h1>useEffect in React {count}</h1>
                <button onClick={() => setCount(count + 1)}>Update Counter</button>
            </div>
        )
    }
}

