//this container takes the state from the store and the actions and passes
// them to the Main container.
import React, { PropTypes } from 'react'
import Main from './Main';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as BoltaartActions from '../actions'

const App =({boltaart, actions}) =>(
            <div className="App">
                <Main actions={actions} boltaart={boltaart}/>
            </div>
);

App.propTypes = {
    boltaart: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    boltaart: state.boltaart
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(BoltaartActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)