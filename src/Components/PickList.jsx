import React, {Component} from 'react'

class PickList extends Component {
    constructor() {
        super();
        this.state = {
            admin: false,
            samples: []

        }
    }
    render() {
        return(
        <div className='PickList'>
            {displayPickList}
        </div>)
    }
}
export default PickList