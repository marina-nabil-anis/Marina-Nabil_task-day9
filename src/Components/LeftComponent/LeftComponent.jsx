import './LeftComponent.css'
import MyPic from '../../assets/image-jeremy.png'

function LeftComponent (){
    return(
        <div id='PersonalInfo'>
            <div id="MyName">
                <img id='MyPic' src={MyPic}/>
                <div id='Me'>
                <label id='Report'>Report for</label>
                <div id='Jeremy'>
                <h2 className='Name'>Jeremy</h2>
                <h2 className='Name'>Robson</h2>
                </div>
                </div>
            </div>
            <div id='btnsdiv'>
            <button className='BTNS'>Daily</button>
            <button className='BTNS'> Weekly</button>
            <button className='BTNS'>Monthly</button>
            </div>

        </div>
    )
}

export default LeftComponent