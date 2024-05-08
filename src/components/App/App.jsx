import { useEffect, useState } from "react"
import Description from "../Descriptions/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification"

export default function App() {
    const [options, setOption] = useState(() =>
    {
        const savedFeedback = localStorage.getItem('feedback');
        if (savedFeedback !== 0) {
            return JSON.parse(savedFeedback);
        }
        
        return {
        good: 0,
        neutral: 0,
        bad: 0
    }})

    function updateFeedback(feedbackType) {
        setOption({
            ...options,
            [feedbackType]: options[feedbackType]+1,
        })

    }
    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(options))
    },[options])
    function handleReset() {
        setOption({
        good: 0,
        neutral: 0,
        bad: 0
        })
    }
    const totalFeedback = options.good + options.neutral + options.bad;
    const positiveFeedback = Math.round((options.good / totalFeedback) * 100);


        return (
            <>
                <Description />
                <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} onReset={handleReset} />                
                {totalFeedback > 0 ? <Feedback options={options} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} /> : <Notification />}
               
        </>
    )
    
}

