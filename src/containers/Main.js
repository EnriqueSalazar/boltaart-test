import React, {Component, PropTypes} from "react";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        };
    }


    componentDidMount() {
        this.props.actions.loadData();
    }

    componentWillReceiveProps(nextProps) {
        debugger
        const data = nextProps.boltaart.data;
        this.setState({data});
    }


    render() {
        return (<div>{JSON.stringify(this.state.data)}</div>);
    }
}

Main.propTypes = {
    actions: PropTypes.object.isRequired,
    boltaart: PropTypes.object.isRequired
};

export default Main;
