import './buttons.css'
export default function Buttons ({classname , contant , icone , onclick}) {
    return (<>
        <button className={classname} onClick={onclick}>{contant}{icone}</button>
        
    </>)
}