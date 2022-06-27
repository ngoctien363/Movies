import React, { useCallback, useEffect, useState } from "react";
import { Badge, Input } from "reactstrap";
import DetailMovie from "./DetailMovie";
import './style.scss'
import { removeVietnameseTones } from '../childComp/convertViet/Index'

export const urlPath = 'https://image.tmdb.org/t/p/original'
const MovieList = ({ movies, reloadData }) => {
    const [selected, setSelected] = useState(false)
    const [dataSelected, setDataSelected] = useState(null)
    const [dataMovies, setDataMovies] = useState([])
    const [newDataMovies, setNewDataMovies] = useState([])

    const handleSelected = useCallback((item) => {
        setSelected(true)
        setDataSelected(item)
    }, [])

    useEffect(() => {
        setDataMovies(movies)
        setNewDataMovies(movies)
    }, [movies])


    const handleChangeSearch = (event) => {
        let value = removeVietnameseTones(event.target.value).toLowerCase().trim();
        const res = dataMovies.reduce((acc, a) => {
            const ch = a.children && a.children.filter(b => removeVietnameseTones(b.title).toLowerCase().trim().includes(value));
            if (ch && ch.length) acc.push({ ...a, children: ch });
            else if (removeVietnameseTones(a.title).toLowerCase().trim().includes(value)) acc.push({ ...a, name: a.title });
            return acc;
        }, []);
        setNewDataMovies(res);
    }

    return (
        <React.Fragment>
            {!selected ? <>
                <div className="search">
                    <Input
                        type="text"
                        style={{ flex: 1 }}
                        className="searchBox"
                        placeholder="Nhập từ khóa..."
                        onChange={(event) => handleChangeSearch(event)}
                    />
                </div>
                {newDataMovies.length !== 0 ? newDataMovies.map((movie, index) => (
                    <div key={index} className="col-md-3 col-sm-12 mt-4">
                        <div className="imagebox" onClick={() => handleSelected(movie)}>
                            <Badge className="badge" color={movie.vote_average > 6 ? "primary" : "secondary"}>{movie.vote_average}</Badge>
                            <img width="100%" className="img-fluid" src={urlPath + movie.poster_path} alt="movies"></img>
                            <span className="imagebox-desc">
                                {movie.title} {`(${new Date().getFullYear(movie.release_date)})`}
                            </span>
                        </div>
                    </div>
                )) : <></>}
            </> : <DetailMovie reloadData={reloadData} item={dataSelected} />}
        </React.Fragment>
    )
}
export default MovieList