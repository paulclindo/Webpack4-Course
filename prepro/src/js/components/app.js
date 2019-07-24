import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../videos/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

console.log(data)
function App() {
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
    }
    return (
        <div>
            <h1>Bienvenidos a mi curso </h1>
            <p className="sass">esto es sass</p>
            <p className="less">esto es less</p>
            <p className="stylus">esto es stylus</p>
            <p className="post-css">esto es post-css</p>
            <video src= {video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} width={ 100 } alt=""/>
            </p>
            <div>
                <ul>
                    {
                        loaderList.map(item => <Loader {...item} key={item.id} />)
                    }
                </ul>
                <button onClick={handleClick}>Mostrar lo aprendiendo hasta el momento</button>
            </div>
        </div>
    )
}
export default App