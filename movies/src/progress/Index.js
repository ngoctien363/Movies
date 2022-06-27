import React from 'react'
import './style.css'

export default function IndexProgress({count}) {
    return (
        <div>
            <svg id="svg" viewbBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#FDB900" />
                <path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
                    stroke-dasharray="1,250.2"
                    d="M50 10
           a 40 40 0 0 1 0 80
           a 40 40 0 0 1 0 -80"/>
                <text x="50" y="50" dy="7" style={{fontSize:"20", textAnchor:"middle"}}>{count}%</text>
            </svg>
            {/* <div class="circle_box">
                <div>
                    <svg>
                        <circle cx="100" cy="100" r="95" />
                        <circle cx="100" cy="100" r="95" />
                    </svg>
                    <span>80%</span>
                </div>
            </div> */}
        </div>
    )
}
