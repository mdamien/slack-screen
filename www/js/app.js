var HomePage = React.createClass({
    getInitialState: function() {
        feed.onChange(function(messages) {
            this.setState({messages: messages});
        }.bind(this));
        return {messages: []};
    },
    render: function () {
        if (this.state.messages.length == 0) {
            return <h1>not connected :(</h1>;
        }
        var last5 = this.state.messages.slice(
            Math.max(0, this.state.messages.length-5),
            -1);
        var last = this.state.messages.slice(-1)[0];
        return (
            <div>
                {last5.map((x,i) => <h4 key={i}>{x}</h4>)}
                <h1>{last}</h1>
            </div>
        );
    }
});

React.render(<HomePage />, document.getElementById('main'));