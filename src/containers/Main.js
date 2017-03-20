import React, {Component, PropTypes} from "react";

import {Grid, Row, Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

import AppBar from '../components/AppBar';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        this.props.actions.loadData();
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.boltaart.data;
        this.setState({data});
    }

    render() {
        const isDataLoaded = !!this.state.data;
        let renderApp = null;
        if (isDataLoaded) {
            renderApp = (
                <div>
                    <AppBar customer={this.state.data.customer}/>
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
