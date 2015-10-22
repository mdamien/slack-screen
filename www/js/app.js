var HomePage = React.createClass({
    getInitialState: function() {
        feed.onChange(function(messages) {
            this.setState({messages: messages.slice(messages.length-4)});
        }.bind(this));
        return {messages: []};
    },
    render: function () {
        return (
            <div>
                <h2>messages</h2>
                <pre>{JSON.stringify(this.state.messages, null, 2)}</pre>
            </div>
        );
    }
});

React.render(<HomePage />, document.getElementById('main'));