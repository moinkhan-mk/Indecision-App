class IndecisionApp extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        title:'Indecision App',
                        subtitle:"Put your Life in the Hands OF Computer",
                        options:[]
                }
                this.handleRemoveAll = this.handleRemoveAll.bind(this)
                this.randomSelection =this.randomSelection.bind(this)
                this.formSubmit =this.formSubmit.bind(this)
        }


        handleRemoveAll(){
                
                this.setState(() => {
                        return {
                                options:[]
                        }
                });
        }
        randomSelection(){
                const index = Math.floor(Math.random() *this.state.options.length);
                alert(this.state.options[index]);

        }
        formSubmit(option){
                if(!option){
                        return "Enter the valid value";
                }
                else if(this.state.options.indexOf(option) >-1) {
                        return "this Option is already Exist";
                }
                this.setState((prevState) =>{      
                        return {
                                options:prevState.options.concat(option)
                        }
                })
                
        }  
        render(){
            return (
                    <div>
                        <Header  title = {this.state.title} subtitle ={this.state.subtitle}/> 
                        <Action
                                 disabled = {this.state.options.length > 0}
                                 randomSelection = {this.randomSelection}
                                 
                        />
                        
                        <Option
                                 option = {this.state.options}
                                 handleRemoveAll = {this.handleRemoveAll}     
                                 formSubmit = {this.formSubmit}
                        />   
                    </div>
            );
        }
}

class Header extends React.Component{
    render(){

        return ( <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle }</p>                     
                </div>
                );
    };
};

class Action extends React.Component{

        render(){         
            return (<div>
                      <button onClick = {this.props.randomSelection}  
                              disabled = {!this.props.disabled}>   what Shoould I </button>
                    </div>);
        };
};

class Option extends React.Component{
        constructor(props){
                super(props);
                this.formAdd = this.formAdd.bind(this);
                this.state = {
                        error: undefined
                }
                

        }

        formAdd(e){
                e.preventDefault();
                const option = e.target.elements.option.value;
                const error = this.props.formSubmit(option);
                this.setState(() => {
                        return {
                                error
                        };
                })

                
                
        }

        render(){
                return (
                        <div>
                               {this.state.error && <p>{this.state.error}</p>}
                               <button onClick = {this.props.handleRemoveAll}>Remove All</button>
                               {this.props.option.map((map) =>{
                                       return <p key = {map}> {map} </p>
                               })
                               }
                               <form onSubmit = {this.formAdd}>
                                       <input type = "text" name = "option" />
                                       <button>submit</button>
                               </form>

                        </div>
                );

        }
}


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));