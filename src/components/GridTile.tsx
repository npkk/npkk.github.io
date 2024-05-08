import './GridTile.css'

type GridTileProp = {
    title: string;
}

export default function GridTile ({title}: GridTileProp) {

    return (
        <>
            <div className="tile_container">
                <div className="tile__title" id={`tile__title--${title}`}>
                    {title}
                </div>
            </div>
        </>
    );
}