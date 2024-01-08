import React from 'react';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import HorizontalChart from './charts/chart-horizontal';
import CountUp from "react-countup"

const temp={color:'#664ce9',fontWeight:'bolder'}
const Home = () => {

  return (
    <div className='homedemo container my-4' style={{ transform: 'translateY(10%)',  }}>
      {/* First Row */}
      <h1 style={{marginTop:'-8%', textAlign:'center' ,color:'#664ce9',fontWeight:'bolder'}}>WELCOME</h1>
      <div className='my-4 row my-4'>
        <div className='col-md-6 col-lg-4 '>
          <div className="card mb-3 homecard">
            {/* Content for the first column */}
            <div className="card-body">
              <h2 className="card-title" style={temp}><CountUp start={0} end={500} duration={1} delay={0}/>+</h2>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <span class="badge bg-success">Primary</span>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className="card mb-3 homecard">
            {/* Content for the second column */}
            <div className="card-body">
              <h2 className="card-title" style={temp}><CountUp start={0} end={200} duration={1} delay={0}/>+</h2>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <span class="badge bg-primary">Primary</span>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-4'>
          <div className="card mb-3 homecard">
            {/* Content for the third column */}
            <div className="card-body">
              <h2 className="card-title" style={temp}><CountUp start={0} end={100} duration={1} delay={0}/>+</h2>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <span class="badge bg-danger">Primary</span>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      {/* Second Row */}
      <div className='row'>
        <div className='col-md-4'>
          <div className="border p-3 bg-white homecard">
            {/* Content for the first column */}
            <h2>Column 1</h2>
            <p>This is the content for the first column.</p>
            <PieChart />
            <br />
            <br />
          </div>
        </div>
        <div className='col-md-8'>
          <div className="border p-3 bg-white homecard">
            {/* Content for the second column */}
            <h2>Column 2</h2>
            <p>This is the content for the second column.</p>
            <LineChart limit={16} />
            <br />
          </div>
        </div>
      </div>

      <hr/>
      {/* Third Row */}
      <div className='row '>
        <HorizontalChart className="bg-white" limit={25} />
      </div>
    </div>
  );
};

export default Home;
