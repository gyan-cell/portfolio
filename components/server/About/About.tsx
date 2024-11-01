import React from 'react'
import "./about.scss"
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import image from "@/images/wallhaven-p2myjp.jpg"
import { itim } from '@/styles/fonts'
import Link from 'next/link'

const About = () => {
  return (
    <div id="about">
      <div className='skillSection'  >
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >HTML <span  >99%</span>  </div>
          <div className='skillProgress'  ><Progress value={99} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >CSS <span  >90%</span>  </div>
          <div className='skillProgress'  ><Progress value={90} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >JAVASCRIPT <span  >80%</span>  </div>
          <div className='skillProgress'  ><Progress value={80} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >REACT <span  >90%</span>  </div>
          <div className='skillProgress'  ><Progress value={90} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >NODE <span  >70%</span>  </div>
          <div className='skillProgress'  ><Progress value={70} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >EXPRESS JS <span  >90%</span>  </div>
          <div className='skillProgress'  ><Progress value={90} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >MONGO DB <span  >60%</span>  </div>
          <div className='skillProgress'  ><Progress value={60} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >Python <span  >50%</span>  </div>
          <div className='skillProgress'  ><Progress value={50} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >NEXT JS <span  >85%</span>  </div>
          <div className='skillProgress'  ><Progress value={85} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >GIT <span  >80%</span>  </div>
          <div className='skillProgress'  ><Progress value={80} /></div>
        </div>
        <div className='skills'  >
          <div className={`skillName ${itim.className} `}  >MY SQL <span  >65%</span>  </div>
          <div className='skillProgress'  ><Progress value={65} /></div>
        </div>
      </div>
      <div className={`additionalSection ${itim.className}`}  >
        <div className='setup'  >
          <h1 className={itim.className + "w-full flex justify-center"}  >My Programming Setup</h1>
          <p className={itim.className}  >Operating System : Linux (<Link target='_blank' href="https://garudalinux.org/">Garuda Linux</Link>) </p>
          <p className={itim.className}  >IDE : <Link target='_blank' href="https://neovim.io/">Neovim</Link> </p>
          <p className={itim.className}  >Window Manager : <Link target='_blank' href="https://i3wm.org/">I3 </Link> </p>
          <p className={itim.className}  >Browser For Frontend : <Link target='_blank' href="https://www.mozilla.org/en-US/firefox">Firefox</Link> </p>
          <p className={itim.className}  >Browser Default : <Link target='_blank' href="https://firedragon.garudalinux.org/">FireDragon</Link> </p>
          <p className={itim.className}  >Terminal : <Link target='_blank' href="https://sw.kovidgoyal.net/kitty/">Kitty</Link> </p>
          <p className={itim.className}  >Monitor : <Link target='_blank' href="https://store.acer.com/en-in/acer-ek220q-54-61-cm-21-5-full-hd-1920x1080-pixels-va-panel-lcd-monitor-with-led-back-light-i-1-ms-vrb-i-100-hz-refresh-rate-i-250-nits-i-hdmi-vga-ports-with-hdmi-cable-i-eye-care-features-black-2-8-kg-um-we0si-301">Acer EK220Q 21.5 Inch Full HD (1920x1080) Pixels VA Panel LCD 100Hz </Link> </p>
          <p className={itim.className}  >CPU : <Link target='_blank' href={'https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600.html'} > AMD Ryzen 5 7600</Link> </p>
          <p className={itim.className}  >GPU : <Link target='_blank' href="https://www.zotac.com/mk/product/graphics_card/zotac-gaming-geforce-rtx-3060-twin-edge-oc-0"> Zotac Rtx 3060 Gddr6 12Gb 192Bit Pcie 4.0 | 3584 CUDA CORES  </Link> </p>
          <p className={itim.className}  >RAM : <Link target='_blank' href="https://www.corsair.com/us/en/p/memory/cmk32gx5m2b5200z40/vengeance-32gb-2x16gb-ddr5-dram-5200mt-s-cl40-amd-expo-memory-kit-cmk32gx5m2b5200z40">Corsair Corsair Vengeance 16GB DDR5 5200MHz </Link> </p>
          <p className={itim.className}  >Storage : <Link target='_blank' href={"https://www.westerndigital.com/en/"}>Western Digital WD Black SN770 NVMe 1TB GEN4 5150Mbps</Link></p>
          <p className={itim.className}  >Motherboard : <Link target='_blank' href={"https://www.gigabyte.com/Motherboard/B650-AORUS-ELITE-AX-V2#kf"}>GIGABYTE b650 Aurous Elite Ax v2</Link></p>
          <p className={itim.className}  >Keyboard : <Link target='_blank' href={"https://aulaindia.com/product/aula-mechnical-keyboard-f3287/"}>Aula f3287</Link></p>
          <p className={itim.className}  >CABINET: <Link target='_blank' href={"https://www.galax.com/en/cooling-cases/casing/revolution-06.html"}>GALAX REVOLUTION 6</Link></p>
          <p className={itim.className}  >CPU STOCK  COOLER : <Link target='_blank' href={"https://www.deepcool.com/products/Cooling/cpuaircoolers/AK620-High-Performance-CPU-Cooler-1700-AM5/2021/13067.shtml"}>DEEPKOOL AK620</Link></p>
          <p className={itim.className}  >POWER SUPPLY: <Link target='_blank' href={"https://www.amazon.in/MSI-A650BN-Gaming-Power-Supply/dp/B09GW3QZLJ?th=1"}>MSI MAG A650BN Power Supply Unit - 650W</Link></p>
        </div>
      </div>
    </div>
  )
}

export default About
