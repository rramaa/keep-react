import App from 'app'
import { render } from 'react-dom'

require('style/style.scss')

const renderApp = Component => {
  render(Component, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept()
}

renderApp(App)
