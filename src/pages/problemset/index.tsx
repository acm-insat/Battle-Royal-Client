import { Card, FullButton, Button, Challenge } from 'shared/ui'
import React, {useEffect, useState } from 'react'

const Problemset = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setCount(document.getElementsByClassName("shadow my-10").length)
    },[])

    return (
        <div>
            <div className="mt-8">
                <p className="text-white pl-3">Problems Count: {count}</p>
            </div>
            <Challenge id="1" datecountdown="1632241136" secondstoend="450" title="Challenge 1 #001" state="on" level="easy" points="250" type="Backtracking Problem" shortdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Challenge id="2" title="Challenge 2 #002" state="off" level="hard" points="450" type="Arithmetic Problem" shortdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
            <Challenge id="3" title="Just some hello world app #003" state="notyet" level="medium" points="300" shortdescription="nothing yet..."/>
        </div>
    )
}
export default Problemset