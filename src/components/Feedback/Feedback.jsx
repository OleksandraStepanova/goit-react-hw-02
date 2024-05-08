import css from './Feedback.module.css'

export default function Feedback({ options, totalFeedback, positiveFeedback}) {
    return (
        <ul className={css.list}>
            <li>Good: {options.good}</li>
            <li>Neutral: {options.neutral}</li>
            <li>Bad: {options.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>
    )
}