import addEventIcon from '../../../../assests/addPlus.svg'
import '../PreviewCalendar/previewCalendar.css'
import goBack from '../../../../assests/goBack.svg'
import goForward from '../../../../assests/goForward.svg'
import sun from '../../../../assests/sun.svg'
import videoCam from '../../../../assests/video-camera.svg'

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const days = [31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 1,2,3,4,5,6,7,8,9,10,11,12,13]
function SmallCalendar(){



    return(
        <div className="sideBar">
            <div className="topHeader">
                <div className="dots">
                    <button className="btn dot red"></button>
                    <button className="btn dot yellow"></button>
                    <button className="btn dot green"></button>
                </div>
                <div className="plusButton">
                    <button className="btn addEvent">
                        <img src={addEventIcon} alt="add smth" />
                    </button>
                </div>
            </div>

            <div className="monthYearBlock">
                <div className="monthYear">
                    <h1 className="month">February</h1>
                    <h1 className="year">2021</h1>
                </div>
                <div className="backNForwar">
                    <button className="btn">
                        <img src={goBack} alt="go back" />
                    </button>
                    <button className="btn">
                        <img src={goForward} alt="go forward" />
                    </button>
                </div>
            </div>

            <div className="miniCalend">
                <div className="weekDays"> 
                    {weekDays.map(d=>(
                        <div className="weekDay"> {d} </div>
                    ))}
                </div>
                <div className="weekDays days">
                    {days.map(day=>(
                        <div className="day"> {day} </div>
                    ))}
                </div>
            </div>
            
            <div className="events">
                <div className="todayEvents">
                    <div className="todayTitle activeDay">
                        <div className="title">TODAY</div>
                        <div className="todayDay"> 2/27/2021</div>
                    </div>
                    <div className="todayWeatherForecast">
                        <span className="temp1">55</span>
                        <span className="temp2">/40</span>
                        <img className="sun" src={sun} alt="sun" />
                    </div>
                </div>
                <div className="mainTitle">All-Hands Company Meeting</div>
                <div className="meeting">
                    <div className="priority blue"></div>
                    <div className="meetingDetails">
                        <div className="timeDetails">
                            <div className="meetingTime">8.30 - 9.00 AM</div>
                            <div className="video">
                                <img className="videCamIcon" src={videoCam} alt="video camera icon" />
                            </div>
                        </div>
                        <div className="meetingDescr">Monthly catch-up</div>
                        <div className="zoomLink"></div>
                    </div>
                </div>
               
                <div className="meeting">
                    <div className="priority blue"></div>
                    <div className="meetingDetails">
                        <div className="timeDetails">
                            <div className="meetingTime">8.30 - 9.00 AM</div>
                            <div className="video">
                                <img className="videCamIcon" src={videoCam} alt="video camera icon" />
                            </div>
                        </div>
                        <div className="meetingDescr">Quarterly review</div>
                        <div className="zoomLink">https://zoom.us/i/1983475281</div>
                    </div>
                </div>

                <div className="todayEvents">
                    <div className="todayTitle">
                        <div className="title">TOMORROW</div>
                        <div className="todayDay">  2/28/2021</div>
                    </div>
                    <div className="todayWeatherForecast">
                        <span className="temp1">55</span>
                        <span className="temp2">/40</span>
                        <img className="sun" src={sun} alt="sun" />
                    </div>
                </div>

                <div className="meeting">
                        <div className="priority pink"></div>
                        <div className="meetingDetails">
                            <div className="timeDetails">
                                <div className="meetingTime">8.30 - 9.00 AM</div>
                                <div className="video">
                                    <img className="videCamIcon" src={videoCam} alt="video camera icon" />
                                </div>
                            </div>
                            <div className="meetingDescr">Visit to discuss improvements</div>
                            <div className="zoomLink">https://zoom.us/i/1983475281</div>
                        </div>
            
                </div>
                <div className="meeting">
                    <div className="priority blue"></div>
                    <div className="meetingDetails">
                        <div className="timeDetails">
                            <div className="meetingTime">8.30 - 9.00 AM</div>
                            <div className="video">
                                <img className="videCamIcon" src={videoCam} alt="video camera icon" />
                            </div>
                        </div>
                        <div className="meetingDescr">Presentation of new products and cost structure</div>
                        <div className="zoomLink"></div>
                    </div>
                </div>
               

            </div>
                        

        </div>
    )
}

export default SmallCalendar