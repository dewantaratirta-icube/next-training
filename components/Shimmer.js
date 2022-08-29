const defaultConf = {
    column: 4,
    row: 2,
    style: '',
    height: '20vh'
}

export default function Shimmer(props) {
    let conf = { ...defaultConf, ...props };
    let row = [];

    for (let i = 0; i < conf.column; i++) {
        let column = [];
        for (let x = 0; x < conf.row; x++) {
            column.push(<div key={`${i}${x}`} className="shimmer-col"><div className="shimmer" style={{height:conf.height}}></div></div>)
        }

        row.push(
            <div>
                {
                    column.map(c => (c))
                }
            </div>
        )
    }

    return (
        <div className="grid">
            {row.map((v) => (v))}
            <style jsx>{`
            .grid{grid-template-columns: repeat(auto-fit,minmax(0%,1fr))}
            .grid .div{margin-bottom:10px;}
            `}</style>
        </div>
    )
}