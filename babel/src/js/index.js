import '../css/index.css'
import search from './search'
import render from './render'

const id = prompt('quien es ese pokemon?')
search(id)
    .then((data)=>{
        render(data)
    })
    .catch(()=>{
        console.log('no se ha encontrado un pokemon');
    })




//This is for Hot Replacement Module
// if (module.hot) {
//     module.hot.accept('./text', function(){
//         console.log('he recargado en hot')
//         text()
//     })
// }