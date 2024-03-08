import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronUp } from "lucide-react"
import {useState} from 'react'
import React from 'react'

// @ts-ignore
const Dropdown: React.FC<{ brands: any, theme: string, device: string, setNewDimen: any, setFixedDimen: any, fixedDimen: any, setActiveDevice: any }> = ({brands, theme, device, setNewDimen, setFixedDimen, fixedDimen, setActiveDevice}) => {
  const [activeModel, setActiveModel] = useState('')
  const [activeBrand, setActiveBrand] = useState('')
  
  const Drop: React.FC<{ brand: any }> = ({brand}) => {
    for (let value of Object.values(brand)) {
      return (
        value.map((model: any)=>(
          <DropdownMenuItem key={model.name} onClick={()=>{
              setNewDimen(model.width, model.height)
              let fixed = [...fixedDimen]
              switch(device){
                case 'Mobile':
                  fixed[0] = [model.width, model.height]
                  break
                case 'Tablet':
                  fixed[1] = [model.width, model.height]
                  break
                case 'Laptop':
                  fixed[2] = [model.width, model.height]
                  break
                case 'Desktop':
                  fixed[3] = [model.width, model.height]
                  break
              }
              setFixedDimen([...fixed])
              setActiveDevice(device.toLowerCase())
              setActiveModel(model.name)
              setActiveBrand(Object.keys(brand)[0])
            }} className={`${activeModel==model.name ? 'bg-bg2': ''} border-t-color3 border-t-[1px] flex flex-col items-start`}>
            <span>{model.name}</span>
            <span className=' text-color3'>{model.width}×{model.height}</span>
          </DropdownMenuItem>
        ))
      )
    }
  }
 
  
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="text-color4">
          <ChevronUp />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`${theme ? 'dark' : 'light'} bg-bg1 text-color1 `}>
          <DropdownMenuLabel>{device}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          {
            brands.map((brand: any, index: any)=>index==0 ? 
            <DropdownMenuItem onClick={()=>{
              let fixed = [...fixedDimen]
              switch(device){
                case 'Mobile':
                  fixed[0] = [brand[0], brand[1]]
                  break
                case 'Tablet':
                  fixed[1] = [brand[0], brand[1]]
                  break
                case 'Laptop':
                  fixed[2] = [brand[0], brand[1]]
                  break
                case 'Desktop':
                  fixed[3] = [brand[0], brand[1]]
                  break
              }
              setFixedDimen([...fixed])
              setNewDimen(brand[0], brand[1])
              setActiveDevice(device.toLowerCase())
              setActiveBrand(device)
            }} className={`${activeBrand==device ? 'bg-bg2': ''} border-t-color3 border-t-[1px] flex flex-col items-start hover:bg-bg2`}>
              <span>Default</span>
              <span className=' text-color3'>{brand[0]}×{brand[1]}</span>
            </DropdownMenuItem> :(
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger className={`${activeBrand==Object.keys(brand)[0] ? 'bg-bg2': ''} hover:bg-bg2`}>
                  <span>{Object.keys(brand)}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal >
                  <DropdownMenuSubContent className={`${theme ? 'dark' : 'light'} bg-bg1 text-color1 max-h-96 overflow-y-scroll`}>
                    <DropdownMenuLabel>{Object.keys(brand)}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Drop brand={brand} />
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
          ))
          }
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default Dropdown



