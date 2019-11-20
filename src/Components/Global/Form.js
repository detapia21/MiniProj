import React,{Component} from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';

class Form extends Component{
    static propTypes = {
        body:PropTypes.object.isRequired
    }
    render(){
        const {body} = this.props;
        return(
            <div className="Content">
                {body}
            </div>
        );
    };
}
export default Form;