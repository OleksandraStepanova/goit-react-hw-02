import css from './Options.module.css'

export default function Options({ onUpdate, totalFeedback, onReset}) {
    const handleClick = (event) => {
        onUpdate(event.target.value);        
    }
   
    return (
        <ul className={css.list}>
            <li><button type='button' onClick={handleClick} value ='good'>Good</button></li>
            <li><button type='button' onClick={handleClick}  value ='neutral'>Neutral</button></li>
            <li><button type='button' onClick={handleClick} value='bad'>Bad</button></li>
            {totalFeedback>0?<li><button onClick={onReset}> Reset</button></li>:<></>}
        </ul>)
}