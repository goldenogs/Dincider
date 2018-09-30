class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            hidden: true
        };
    }
    handleToggleVisibility() {
        this.setState((prev) => {
            return {
                hidden: !prev.hidden
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.hidden?'Show details':'Hide details'}</button>
                {!this.state.hidden&&
                <div>
                    <p>
                        q wdwqdwqdqwdwq
                    </p>
                </div>}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));











// const appRoot = document.getElementById('app');
// let hidden = true;
// const details = 'fqwefdwfqwdwqdqw'
// const hide = () => {
//     if (hidden) {
//         hidden = false;
//     }
//     else
//         hidden = true;
//     render();
// }
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={hide}>{hidden?'Show details':'Hide details'}</button>
//             {!hidden && 
//                 <div>
//                 <p>
//                 {details}
//                 </p>
//                 </div>}
//         </div>
//         );

//     ReactDOM.render(template, appRoot)
// };

// render();