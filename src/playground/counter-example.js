
class Counter extends React.Component {

        constructor(props){
            super(props);
            this.handleAddOne = this.handleAddOne.bind(this);
            this.handleMinusOne = this.handleMinusOne.bind(this);
            this.handleReset = this.handleReset.bind(this);
            this.state = {
                count:0

            }

        }
        
        handleAddOne(){
            this.setState((prevState) =>{
                return {
                    count:prevState.count + 1
                }
            });
        }
        handleMinusOne(){
           this.setState((prevState) =>{
               return {
                   count:prevState.count - 1
               }
           })
        }
        handleReset(){
            this.setState((prevState) =>{
                return {
                    count : 0
                }
            })
        }

        render() {
            return (
                <div>
                    <h1>Counter : {this.state.count}</h1>
                    <button onClick = {this.handleAddOne}>+1</button>
                    <button onClick = {this.handleMinusOne}>-1</button>
                    <button onClick = {this.handleReset}>reset</button>

                </div>
            );
        }
}
ReactDOM.render(<Counter /> ,document.getElementById('app'));




















// let counter = 0;

// const addOne = () =>{
//     counter++;
//     console.log('minusOne ');
//     binding();
// };

// const reset = () =>{
//     counter = 0;
//     console.log('reset');
//     binding();
// };

// let appRoot = document.getElementById('app');

// const binding = ()=>
//     {
//     const templateTwo = 
//         (
//             <div>
//                 <h1>Counter : {counter}</h1>
//                 <button  onClick={addOne}>+1</button>
//                 <button onClick={reset}>reset</button>
//             </div>
//         );
//         ReactDOM.render(templateTwo,appRoot);
//     };


// binding();