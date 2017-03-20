import React, {Component, PropTypes} from "react";
import moment from 'moment';

import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppBar from '../components/AppBar';
import CustomerDetails from '../components/CustomerDetails';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            placedAt: null,
        };
    }

    componentDidMount() {
        this.props.actions.loadData();
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.boltaart.data;
        let placedAt = null;
        if (data && data.placedAt) {
            placedAt = moment(data.placedAt);
        }
        this.setState({data, placedAt});
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
