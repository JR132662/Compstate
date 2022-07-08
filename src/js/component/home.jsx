import React, {useState,useEffect} from "react"

function Home(){
	const [ color, setColor] = useState("red");

	return (
		<div className="container"><h1>Traffic Light</h1>
			<div className="boxcontainer">
				<div onClick={()=>setColor("green")} className={(color=="green") ? "box green selected":"box green"}></div>
				<div onClick={()=>setColor("yellow")} className={(color=="yellow") ? "box yellow selected":"box yellow"}></div>
				<div onClick={()=>setColor("red")} className={(color=="red")?"box red selected":"box red"}></div>
			</div>
		</div>
	)
}

export default Home;



