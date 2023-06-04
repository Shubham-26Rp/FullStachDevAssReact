//2) use hooks to get update regarding any state value into function component.
import React, { useState } from "react";

export default function UpdateState() {
    const [name, setName] = useState("bhagirath");
    {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <button className="btn" type="button" onClick={() => {
                            setName("full stack test");
                        }}>Change{name}</button>
                    </div>
                </div>
            </div>
        )
    }
}


