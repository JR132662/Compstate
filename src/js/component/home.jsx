import React, {useState} from "react"

function Home(){
	const [ color, setColor] = useState("red");

	const Cycle = () => {
		if (color=="red"){
			setColor("green")
		}else if (color=="green"){
			setColor("yellow")
		}else{
			setColor("red")
		};
			
		
	}
	  

return(
		<div className="container"><h1>Traffic Light</h1>
			<div className="boxcontainer">
				<div onClick={()=>setColor("green")} className={(color=="green") ? "box green selected":"box green"}></div>
				<div onClick={()=>setColor("yellow")} className={(color=="yellow") ? "box yellow selected":"box yellow"}></div>
				<div onClick={()=>setColor("red")} className={(color=="red")?"box red selected":"box red"}></div>
				<button onClick={Cycle} className="cycle-button"><p>Click me</p></button>
			</div>
		</div>
	)
}

export default Home;



