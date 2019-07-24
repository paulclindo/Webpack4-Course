import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)
function App() {
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.loaders)
    }
    return (
        <div>
            <h1>Bienvenidos a mi curso </h1>
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