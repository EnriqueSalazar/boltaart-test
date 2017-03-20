// This container handles the state of the app, also defines the layout.
import React, {Component, PropTypes} from "react";
import moment from 'moment';

import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppBar from '../components/AppBar';
import CustomerDetails from '../components/CustomerDetails';
import Status from '../components/Status';
import ItemsList from '../components/ItemsList';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            placedAt: null,
            assignedAt: null,
        };
    }

    //dispatchs an action to load the data
    componentDidMount() {
        this.props.actions.loadData();
    }

    //when props received from the store, updates state.
    componentWillReceiveProps(nextProps) {
        const data = nextProps.boltaart.data;
        let placedAt = null;
        let assignedAt = null;

        //converting string date to momentjs allows to format data and time as desired
        if (data) {
            if (data.placedAt) {
                placedAt = moment(data.placedAt);
            }
            if (data.assignedAt) {
                assignedAt = moment(data.assignedAt);
            }
        }
        this.setState({data, placedAt, assignedAt});
    }

    toggleItemStatus = (id) => {

        let data = this.state.data
        const items = this.state.data.items
        const sameId = (compareId) =>{
            return compareId.id == id;
        }
        const itemIndex = items.findIndex(sameId)
        if (typeof itemIndex != 'undefined') {
            const item = data.items[itemIndex];
            const status = item.status;
            if (status == 'NEW') {
                data.items[itemIndex].status='RESERVED'
            }
            if (status == 'RESERVED') {
                data.items[itemIndex].status='NEW'
            }
            debugger
        }
        this.setState({data})
    }

    render() {
        //this enables conditional rendering when this.state.data is still empty
        const isDataLoaded = !!this.state.data;
        let renderApp = null;
        //renders dumb components
        if (isDataLoaded) {
            renderApp = (
                <div >
                    <AppBar customer={this.state.data.customer}/>
                    <Divider/>
                    <CustomerDetails
                        customer={this.state.data.customer}
                        placedAtTime={this.state.placedAt.format('hh.mm')}
                        placedAtDate={this.state.placedAt.format('DD-MM-YYYY')}
                    />
                    <Divider/>
                    <Status
                        status={this.state.data.status}
                        assignee={this.state.data.assignee}
                        assignedAtTime={this.state.assignedAt.format('hh.mm')}
                        assignedAtDate={this.state.assignedAt.format('DD-MM-YYYY')}
                    />
                    <Divider/>
                    <ItemsList
                        items={this.state.data.items}
                        toggleItemStatus={this.toggleItemStatus}
                    />
                </div>
            )
        }
        return (
            <div>
                <MuiThemeProvider>
                    <Grid style={{background: 'black'}}>
                        <Row>
                            <Col
                                md={4}
                                mdOffset={4}
                                style={{
                                    background: 'white',
                                    paddingRight: 0,
                                    paddingLeft: 0
                                }}>
                                {renderApp}
                            </Col>
                        </Row>
                    </Grid>
                </MuiThemeProvider>
            </div>
        );
    }
}
//propTypes provides documentation of the props in each component.
Main.propTypes = {
    actions: PropTypes.object.isRequired,
    boltaart: PropTypes.object.isRequired
};

export default Main;
