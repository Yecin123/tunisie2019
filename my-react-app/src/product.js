import React, { Component } from 'react'


import { withRouter } from 'react-router-dom';

import { getProduit } from './api';

import MUIDataTable from 'mui-datatables';

const columns = [
    {
        label: "content",
        name: "content"
    },
    {
        label: "rating",
        name: "rating"
    },
    
];

const options = {
  filterType: "search",
  elevation: 0,
  selectableRows: false
};

 class product extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: null
        };


        console.log(props);
    }
     
     componentDidMount() {
         const id = this.props.match.params.id;

         getProduit(id)
             .then(data => {
                 console.log("received");
                 this.setState({ data });
             });
     }
    render() {

        if (this.state.data == null) return <p>loading</p>;
        const data = this.state;
        return (
            <div>
                
                <div>
                    product Name : {this.state.data.productName}
               </div>
               
                
                 <MUIDataTable 
                    columns={columns}
                    options={options}
                    data= {this.state.data.reviews}
                />
            </div>
        )
    }
 }

export default withRouter(product);


