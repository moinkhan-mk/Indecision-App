console.log('App.js is Running');

const app ={
    title:'Indecision App',
    subtitle:'put your life in the hands of Computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;  
    if (option){
        app.options.push(option);
        e.target.elements.option.value = " ";

    }
    render();

};

const removeAll = () => {
    app.options = [];
    render();
}


const appRoot = document.getElementById('app');

const render = () =>
    {
        const template = (
                <div>
                    <h1>{app.title}</h1>
                    {app.subtitle && <p>{app.subtitle}</p>}
                    <p>{app.options.length >0 ? 'here are your options' : 'No options'}</p>
                    <p>{app.options.length}</p>
                    <button onClick = {removeAll}>Remove All</button>
                    <ol>
                        <li>Item One</li>
                        <li>Item Two</li>
                    </ol>
                    <form onSubmit = {onFormSubmit}>
                        <input type = 'text' name = 'option'/>
                        <button>submit</button>
                    </form>
                </div>

        );
        ReactDOM.render(template,appRoot); 
    };

render();