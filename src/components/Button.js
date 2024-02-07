function Button(props) {
    
    const handleSubmit = () =>{
        props.submit()
    }
    return (

      <div className="Button">
        <button onClick={handleSubmit}>Give me Gif</button>
      </div>
    );
  }
  
  export default Button;
  