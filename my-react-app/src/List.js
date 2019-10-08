


import React, { Component } from 'react';


import MUIDataTable from 'mui-datatables';

import { getList} from "./api";

const columns = [
    {
        label: "color",
        name: "color"
    },
    {
        label: "category",
        name: "category"
    },
    {
        label: "productName",
        name: "productName"
    },
    {
        label: "price",
        name: "price"
    },
    {
        label: "image",
        name: "imageUrl"
    }
];

const options = {
  filterType: "search",
  elevation: 0,
  selectableRows: false
};



export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : []
        }
    }

    componentDidMount() {
        getList().then(data => {
            console.log(data);
            data.forEach(element => {
                
                element.imageUrl = <img src={element.imageUrl} />
            }); 
            this.setState({ data });
        });
    }
    render() {
        return (
            <div>
                <MUIDataTable 
                    columns={columns}
                    options={options}
                    data= {this.state.data}
                />
            </div>
        )
    }
}
