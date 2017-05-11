/**
 * Created by 27353 on 2017/5/10.
 */
import React, { Component } from 'react';

class eader extends Component{

    render(){
        var divStyle = {
            background:'#4DAFDC',

        }
        return(
            <div class="row" style={divStyle}>
                <div className="col-md-12">
                    <p style={{color:'#fff'}}>
                        <a style={{color:'#fff'}}>教师成绩录入窗口</a> </p>
                </div>
            </div>
        );
    }
}
export default eader;