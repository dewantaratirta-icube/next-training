import Shimmer from "@/components/Shimmer";


export default function Loading() {

    return (
        <div className="container">
            <Shimmer column={2} row={2} height={'10vmin'}/>
        </div>
    )
}