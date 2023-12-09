export default function Carousel({slides}){
    return (
    <div className="overflow-hidden">
        <div className="flex">
            {slides.map(s => {
                return <img src={s}></img>
            })}
        </div>
    </div>
    )
}