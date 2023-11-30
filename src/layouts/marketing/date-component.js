import React from 'react';
import Chip from '@mui/material/Chip';

class DateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000 // Update every second
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date()
    });
  }

  render() {
    const { currentDate } = this.state;

    return (
      <div>
<Chip
label={currentDate.toLocaleString()}
size="small"
/>
   </div>
    );
  }
}

export default DateComponent;