import React, { useMemo } from 'react'
import { Button, Progress } from 'reactstrap'
import './style.scss'
import { img_500 } from '../config/config'
// import IndexProgress from '../progress/Index'
// import styled from 'styled-components';

export default function DetailMovie(props) {
    const { item, reloadData } = props

    //     const ColLeft = styled.div`
    //     width: 45%;
    //     background-image: url(${img_500}/${item.backdrop_path})
    // `

    const RenderDetailContent = useMemo(() => (
        <div className='wrapper'>
            <div className='container-form'>
                <div className='col-left'>
                    <div className="imageDetail">
                        <img width="100%" className="img-fluid" src={`${img_500}/${item.poster_path}`} alt="movies"></img>
                    </div>
                </div>
                <div className='col-right'>
                    <div className='content'>
                        <h2>{item.original_title} {`(${new Date().getFullYear(item.release_date)})`}</h2>
                        
                        {/* <IndexProgress count={item.vote_average} /> */}
                        <Progress className="progress-xs" color="info" value={item.vote_average}>{item.vote_average}</Progress>
                        <div className='row mt-3'>
                            <h3 style={{textAlign: 'left'}}>Overview</h3>
                            <p style={{textAlign: 'left'}}>{item.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ), [item.poster_path, item.original_title, item.release_date, item.vote_average, item.overview])
    return (
        <React.Fragment>
            <>
                <div className='btnBack'>
                    <h5 style={{ display: 'flex', alignItems: 'center', height: '40px', borderBottom: '1px solid #ccc' }}>
                        <Button color='primary' className="btn-go-back" onClick={(() => reloadData && reloadData())}>
                            Trở lại
                        </Button>
                        {/* <b>{item.title}</b> */}
                    </h5>
                </div>
                {RenderDetailContent}
            </>
        </React.Fragment>
    )
}
