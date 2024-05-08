import GridTile from './components/GridTile'
import ContentModal from './components/ContentModal'
import './index.css'
import Logo from '/logo.svg'
import props from './contents/content'
import { rootContext, useRootContext } from './contexts/contexts'

function App() {
  const rootCtx = useRootContext()

  const display = !rootCtx.root ? '' : 'none'

  function onTileClick(target: string) {
    rootCtx.setRoot(target)
  }

  return (
    <>
      <rootContext.Provider value={rootCtx}>
        <div id='container'>
          <div id="grid-container" style={{ display: display }}>
            <div id='npkk'>
              <img src={Logo}></img>
            </div>
            {
              props.map((prop) => {
                return <div id={prop.id} onClick={() => onTileClick(prop.id)}>
                  <GridTile title={prop.title}></GridTile>
                </div>
              })
            }
          </div>
          <ContentModal></ContentModal>
        </div>
      </rootContext.Provider>
    </>
  )
}

export default App
