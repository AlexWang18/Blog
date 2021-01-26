import React from 'react'

export default function layout({children}) {
    return (
        <div style = {{margin: `3rem auto`, maxWidth: 650, padding: `0 1rem`}}>
            <h2 style = {{"text-align": "left", color: "eee"}}>Shared Title</h2>
            {children}
        </div>
    )
}
