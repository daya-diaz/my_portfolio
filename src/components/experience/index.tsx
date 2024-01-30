import { SectionTitle } from '../sectionTitle'
import './styles.scss'

import ReactBrand from '../../assets/react-brand.svg'
import TypeScriptBrand from '../../assets/typescript-brand.svg'
import JavaScriptBrand from '../../assets/javascript-brand.svg'
import ViteBrand from '../../assets/vite-brand.svg'



export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experiência"/>
            <p>2 anos prestando serviços como Desenvolvedora Front-end como Freelancer e em empresas, incluindo a Neat Solutions.</p>
            <div className="experienceTime">
                <div className='progress-bar'>
                    <img src={ReactBrand} alt="" />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 anos</span>
                        </div>
                    </div>
                </div>
                <div className='progress-bar'>
                    <img src={TypeScriptBrand} alt="" />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 ano</span>
                        </div>
                    </div>
                </div>
                <div className='progress-bar'>
                    <img src={JavaScriptBrand} alt="" />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 anos</span>
                        </div>
                    </div>
                </div>
                <div className='progress-bar'>
                    <img src={ViteBrand} alt="" />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 ano</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}