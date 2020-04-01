import React from "react";

class ChangingProgressProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valuesIndex: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    static defaultProps = {
        interval: 1000
    };



    intervalID = 0;
    firstTime = true;
    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll() {
        if (window.pageYOffset > 500 && this.firstTime) {
            this.firstTime = false;
            this.intervalID = setInterval(() => {
                this.setState({
                    valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
                });
                if(this.state.valuesIndex === 5 ) {
                    clearInterval(this.intervalID);
                }
            }, this.props.interval);
        }
    }

    render() {
        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

export default ChangingProgressProvider;