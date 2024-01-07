// import React from 'react'
// import NavigationBar from './navbar/NavigationBar'
// import Sidebar from './navbar/Sidebar'
// const Dashboard = () => {
//   return (
//     <div>
//       <NavigationBar/>
//       <div className='container' style={{marginLeft:'18%', marginTop:'6%'}}>Dashboard Page</div>
//     </div>
//   )
// }

// export default Dashboard

import React, { Component } from 'react'
import Sidebar from '../navbar/Sidebar'
export default class Dashboard extends Component {
  render() {
    return (
      <div className=''>
        <Sidebar/>
        <div className='' style={{marginLeft:'18%', marginTop:'6%'}}>Dashboard Page</div>
      </div>
    )
  }
}
