import './Globals.css'
import { useState, useRef, useEffect } from 'react'
import { Url, Adjuster, Iframe } from './sections'

const App = () => {
  const [url, setUrl] = useState('http://localhost:5173/')
  
  // function Iframe() {
//     return (
//       <div ref={resizer} className="iframe bg-bg1 w-full pb-[50%]">
//         <div id='iframe' style={{width: `${dimen[0]}px`, height: `${dimen[1]}px`, transform: `scale(${scale})`, transition: `height ${dimen[2] ? '1s': '0s'}`}} className={`mx-3 mb-[100%] border-bg3widthgggyyyhhyygyuhy border-[15px] rounded-md transform `}>
//           <iframe src={url} frameBorder='10' className='h-full w-full'></iframe>
//         </div>
//       </div>
//     )
//   }

  
  const divider1 = useRef(null)
  const initialHeight = window.screen.height
  const initialWidth = window.screen.width
  const [dimen, setDimen] = useState([initialWidth, initialHeight, false])
  const [scale, setScale] = useState((initialWidth-24)/initialWidth)
  const [dividerWid, setDividerWid] = useState(initialWidth-24)
  const [theme, setTheme] = useState(true)
  
  const toggleTheme = () => {
    setTheme(!theme)
  }
  
  const setNewScale = (e) => {
    setScale(e.target.value < 3 ? 0 : ((e.target.value/100)*(initialWidth-24))/dimen[0])
    setDividerWid(e.target.value/100*(initialWidth-24))
  }
  
  return (
    <main className={`${theme ? 'dark' : 'light' } bg-bg1 text-color w-screen  overflow-y-scroll overflow-x-hidden`}>
      <Url setUrl={setUrl} setTheme={toggleTheme} dimen={dimen}/>
      <div className="w-full flex">
        <div className="mx-3 flex flex-1 mb-[100%]">
          <Iframe scale={scale} dimen={dimen} url={url} />
        </div>
      </div>
      <Adjuster screenWid={dividerWid} setNewScale={setNewScale} setScale={setScale} setDimen={setDimen} dimen={dimen} theme={theme} />
    </main>
  )
}

export default App