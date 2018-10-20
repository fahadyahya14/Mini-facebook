import React, { Component } from 'react';
import Img from './Img'


class Main extends Component {
    render() {
        var key = this.props.loop;
        var data = this.props.click;

      return (



        <div>   
<ul>
{key.map(function(index,val){
return(<li key={val}>
<Img src={key[val].url} alt={data[val]} about={key[val].about} />
  </li>)
})}

</ul>


        </div>

        
      );
    }
  }
  
  export default Main;
  