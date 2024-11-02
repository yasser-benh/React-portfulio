import './prograss-bar.css'
export default function PrograssBar ({classname}) {
    return (<>
        <div className="prograss-bar-fill-container">
            <div className={classname}>
            </div>
        </div>
    </>)
}