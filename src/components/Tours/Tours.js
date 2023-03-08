import '../Tours/Tours.css';
function Tours(props){
    return(
       
        <div1 className="tours">
        {props.myData.map((item)=>{
                return (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name}></img>
                       
                    </div>
                )
            })}
        </div1>
    )
}
export default Tours;