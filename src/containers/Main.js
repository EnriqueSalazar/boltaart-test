import React, {Component, PropTypes} from "react";
import moment from 'moment';

import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppBar from '../components/AppBar';
import CustomerDetails from '../components/CustomerDetails';
import Status from '../components/Status';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            placedAt: null,
            assignedAt: null,
        };
    }

    componentDidMount() {
        this.props.actions.loadData();
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.boltaart.data;
        let placedAt = null;
        let assignedAt = null;
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

    render() {
        const isDataLoaded = !!this.state.data;
        let renderApp = null;
        if (isDataLoaded) {
            renderApp = (
                <div>
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
                </div>
            )
        }
        return (
            <div>
                <MuiThemeProvider>
                    <Grid style={{background: 'black'}}>
                        <Row>
                            <Col md={4} mdOffset={4} style={{background: 'white', padding: 0}}>
                                {renderApp}
                            </Col>
                        </Row>
                    </Grid>
                </MuiThemeProvider>
            </div>
        );
    }
}

Main.propTypes = {
    actions: PropTypes.object.isRequired,
    boltaart: PropTypes.object.isRequired
};

export default Main;
