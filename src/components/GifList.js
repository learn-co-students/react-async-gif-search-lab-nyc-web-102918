import React,{Component} from 'react'
import { userInfo } from 'os';

const GifList = props => 
    <ul>
        {props.gifUrls.slice(0,3).map(url => {
            return <li key = {url.id}> <img src ={`${url.images.original.url}`} /> </li>
        })}
    </ul>

export default GifList;