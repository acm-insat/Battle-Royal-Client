import { Card, FullButton, Button, Challenge, SubmissionRow } from 'shared/ui'
import React, {useEffect, useState } from 'react'
import NewWindow from 'react-new-window'

const Submissions = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setCount(document.getElementsByTagName('tr').length-1)
    },[])

    return (
        <Card title="Submissions">
        <div className="mt-8">
            <p className="text-white pl-3">Submissions Count: {count}</p>
        </div>
  

        <div className="flex flex-col mt-8">
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-500 shadow sm:rounded-lg">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th
                            className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-dark-2 bg-dark-2">
                            TIME</th>
                        <th
                            className="text-white px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-dark-2 bg-dark-2">
                            PROBLEM</th>
                        <th
                            className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-dark-2 bg-dark-2">
                            LANG</th>
                        <th
                            className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-dark-2 bg-dark-2">
                            CODE</th>
                        <th
                            className="text-white px-6 py-3 w-px text-xs font-medium leading-4 tracking-wider text-left text-white uppercase border-b border-dark-2 bg-dark-2">
                            STATUS</th>
                    </tr>
                </thead>

                <tbody className="bg-dark-3">
                    <SubmissionRow time="14:49:21" problem="Challenge 1" lang="python" code="print('hello world')" status="accepted"/>
                    <SubmissionRow time="14:49:26" problem="Challenge 2" lang="cpp" code="" status="rejected"/>
                    <SubmissionRow time="14:49:51" problem="Challenge 3" lang="c" code="sayhi();" status="retry"/>
                    <SubmissionRow time="14:50:03" problem="Challenge 4" lang="java" code="" status="pending"/>


                    
                </tbody>
            </table>
        </div>
    </div>
</div>


        </Card>
    )
}
export default Submissions