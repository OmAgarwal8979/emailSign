import classicv2 from '../assets/templates_img/classic_v2.svg'
import horizontalv2 from '../assets/templates_img/horizontal_v2.svg'
import socialv2 from '../assets/templates_img/social_v2.svg'
import stripv2 from "../assets/templates_img/strip_v2.svg"
export default function Template({setSelectedTemplate}){
    return(
        <div className="h-fit grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-[10px] p-[10px]">
            <div className="border border-[#e8e8e8] border-solid rounded-[4px] group relative h-fit grid justify-center cursor-pointer" onClick={() => {setSelectedTemplate(1)}}>
                <img src={classicv2} alt="Templates" className="grayscale group-hover:grayscale-0 height-full p-[20px] pb-[40px]"/>
                <div className='absolute bottom-[10px] left-[90px] grid select-none font-[700]'>Classic</div>
            </div>
            <div className="border border-[#e8e8e8] border-solid rounded-[4px] group relative h-fit grid justify-center cursor-pointer" onClick={() => {setSelectedTemplate(2)}}>
                <img src={horizontalv2} alt="Templates" className="grayscale group-hover:grayscale-0 height-full p-[20px] pb-[40px]"/>
                <div className='absolute bottom-[10px] left-[90px] grid select-none font-[700]'>Horizontal</div>
            </div>
            <div className="border border-[#e8e8e8] border-solid rounded-[4px] group relative h-fit grid justify-center cursor-pointer" onClick={() => {setSelectedTemplate(3)}}>
                <img src={socialv2} alt="Templates" className="grayscale group-hover:grayscale-0 height-full p-[20px] pb-[40px]"/>
                <div className='absolute bottom-[10px] left-[90px] grid select-none font-[700]'>Social</div>
            </div>
            <div className="border border-[#e8e8e8] border-solid rounded-[4px] group relative h-fit grid justify-center cursor-pointer" onClick={() => {setSelectedTemplate(4)}}>
                <img src={stripv2} alt="Templates" className="grayscale group-hover:grayscale-0 height-full p-[20px] pb-[40px]"/>
                <div className='absolute bottom-[10px] left-[90px] grid select-none font-[700]'>Strip</div>
            </div>
            
        </div>
    )
}