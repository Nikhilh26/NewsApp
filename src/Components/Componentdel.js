import React, { Component } from 'react';

const Componentdel = React.forwardRef((props, ref) => {
  console.log(ref)
  return <ChildComponent myref={ref} />;
});

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // access the underlying DOM element using the ref
    console.log(this.props.myref.current)
  }

  render() {
    return <div ref={this.props.myref}>Hello World</div>;
  }
}

export default Componentdel;

//Very important to understand function to class forwardref 
//forwardref can only wrap function 
/** parent code
 * <Componentdel n={vars} ref={change}/>
    <button onClick={up} >
        Change2222
    </button>

    function up(){
      // console.log(change.current)
      change.current.style.backgroundColor="black"
      // change2.current.style.color="red"
    }

      let change=useRef(null)
    let change2=useRef(null)
 * 
 * 
 * 
 * 
 * 
 */