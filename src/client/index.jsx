import App from 'app'
import { render } from 'react-dom'

const renderApp = Component => {
  render(Component, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept()
}

renderApp(App)
