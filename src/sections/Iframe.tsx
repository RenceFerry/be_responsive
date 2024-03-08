import React from 'react'


const Iframe: React.FC<{ dimen: any, scale: any, url: any }> = ({dimen, scale, url, }) => {
  
  return (
    
      <div id='iframe' style={{width: `${dimen[0]}px`, height: `${dimen[1]}px`, transform: `scale(${scale})`, transition: `height ${dimen[2] ? '1s': '0s'}`}} className={`border-color2 border-[15px] rounded-md transform relative`}>
        <iframe src={url} frameBorder='10' className='h-full w-full'></iframe>
      </div>
    
  )
}

export default Iframe

