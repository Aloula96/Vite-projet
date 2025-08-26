import { useState } from "react";
export default function CheckList(){
const [formCheck,setFormCheck] = useState(['Icecream']);
const changer = (e)=>{
let checked = e.target.checked;
let value = e.target.value;
if(checked){
setFormCheck([...formCheck,value]);
}else{
setFormCheck(formCheck.filter((verification) => verification!== value));
}
}
return(
<>
<form  >
<p>votre dessert</p>
<input
type="checkbox"
id="Icecream"
value='Icecream'
defaultChecked
onChange={changer}></input>
<label htmlFor="">Icecream</label><br></br>
<input
type="checkbox"
id="Cake"
value='Cake'
onChange={changer}></input>
<label htmlFor="">Cake</label><br></br>
<input
type="checkbox"
id="Chocolate"
value='Chocolate'
onChange={changer}></input>
<label htmlFor="">Chocolate</label><br></br>
</form>
<div>
<p>Mes desserts préférés sont : {formCheck.join(',')}</p>
</div>
</>
)
}