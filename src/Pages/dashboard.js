import '../component/dashboard.css'
import CartBox from '../component/UI/cart';
import ContentBox from '../component/UI/content-box';
import React,{useEffect, useState} from 'react'

function Dashboard() {
  // currently hard-coded these value will need to fetch from db.
  const showDetails = {title: 'Shows Booking', count: '200', total: '300'};
  const eventDetails = {title: 'Events Booking', count: '400', total: '500'};
  const showEndDetails = {title: 'Shows Ended', count: '120', total: '500'};
  const UpcomingShowDetails = {title: 'Upcoming Shows', count: '230', total: '600'};
  const [data,setData] = useState([]);
  useEffect(
    ()=>{
      const loadData = async()=>{
        let result = await fetch("http://127.0.0.1:8000/api/get_booking_details");
        result = await result.json();
        setData(result);
      };
   loadData();
  },[]);
  return (
    <>
    <br/>
    <h1>Welcome</h1>
    <br/><br/>
    <div class="boxes">
    <CartBox title={showDetails.title} count={showDetails.count} total={showDetails.total}/>
    <CartBox title={eventDetails.title} count={eventDetails.count} total={eventDetails.total}/>
    <CartBox title={showEndDetails.title} count={showEndDetails.count} total={showEndDetails.total}/>
    <CartBox title={UpcomingShowDetails.title} count={UpcomingShowDetails.count} total={UpcomingShowDetails.total}/>
    </div>

    <br/><br/>
    <div class="boxes">
      <ContentBox title="Recently Booked Tickets" width="55rem" height="35rem" obj={data}/>
      <ContentBox title="Shows Booking" width="25rem" height="35rem" obj={data}/>
    </div>
    </>
  );
}

export default Dashboard;