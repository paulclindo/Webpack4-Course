import '../css/index.css'
import text from './text'
text()

if (module.hot) {
    module.hot.accept('./text', function(){
        console.log('he recargado en hot')
        text()
    })
}