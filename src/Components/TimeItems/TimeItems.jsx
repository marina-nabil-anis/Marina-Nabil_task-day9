import './TimeItems.css'
import Dots from '../../assets/icon-ellipsis.svg'
function TimeItems(props){
    return(
<div className='TimeDivs' style={{backgroundColor :props.SelectionColor}}>
    <img  className='Myimg' src={props.SelectionLogo}/>
    <div className='DetailsDiv'>
        < div className='FirstLine'>
        <label className='ActionLabel'>{props.ActionLabel}</label>
      <button className='DotBTN'> <img className='Dots' src={Dots}/></button>
        </div>
        <div className='secondLine'>
        <label className='Hours'>{props.Hours}</label>
        <label className='LastWeek'>{props.LastWeek}</label>
        </div>
    </div>
</div>
    )
}
 export default TimeItems
