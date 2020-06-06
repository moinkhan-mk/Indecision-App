// const obj = {
//         name:'Moin',
//         getname(){
//                 return this.name;
//         }
// }
// console.log(fucntion);
// const obj1 = obj.getname;

// console.log(obj1());


class IndecisionApp extends React.Component{
        render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands Of Computer";
        const optionComp = ['OneThing',"Twothing"];
        const workHard = "you have to work hard";
            return (
                    <div>
                        <Header  title = {title} subtitle = {subtitle}/> 
                        <Action workHard = {workHard}/>
                        <Options  optionComp = {optionComp}/> 
                        <AddOptions />
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
        constructor(props){
                super(props);
                this.workHard = this.workHard.bind(this);
        }
        workHard(){
                alert("work hard");
        }

        render(){         
            return (<div>
                      <button onClick = {this.workHard}>what Shoould I </button>
                 </div>);
        };
};

class Options extends React.Component{

        constructor(props){
                super(props);
                this.fireTheMethod = this.fireTheMethod.bind(this);
        }
        fireTheMethod() {
                alert(this.props.optionComp);
                      
        }
        render(){
            return (<div>
                    <button onClick = {this.fireTheMethod}>Remove All button</button>
                        
                    <p>{this.props.optionComp.length}</p>
                    {this.props.optionComp.map((data) => {
                         return <p key = {data}> {data} </p>
                    })}

            </div>);
        }
}

class AddOptions extends React.Component{
        hadleEvent() {
                alert('hello');
        }
       
        AddOptionMethod(e) {
        e.preventDefault();
        const options = e.target.elements.option.value.trim();
        if(options){
                 alert(options)
         }else{
                 alert('enter value man ')
         }
       
        } 
        render(){
                return (<div>
                           <form onSubmit = {this.AddOptionMethod} >
                                <input type = "text" name = "option"/>
                                <button>Add Options</button>
                           </form>
                        
                           <button onClick = {this.hadleEvent}>click here</button>
                           <p>Add Option Components Here</p>  
                       </div>);
        }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));