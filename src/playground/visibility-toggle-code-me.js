class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility:false,
            count:0

        }
    }
    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility:!prevState.visibility
            }
        });
    }

    render(){
        return (
                <div>
                    <h1>Visibility Toggle </h1>
                    <button onClick = {this.handleVisibility}>{this.state.visibility ? 'Hide Detail' : 'Show Detail'}</button>
                    {this.state.visibility && <p>Put your Life in the HandS Of Computer</p>}

                </div>
                );
    }
}

ReactDOM.render(<VisibilityToggle /> ,document.getElementById('app'));






