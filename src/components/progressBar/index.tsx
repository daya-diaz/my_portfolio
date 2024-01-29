import './styles.scss';
import ReactBrand from '../../assets/react-brand.svg'
export default function ProgressBar(){
    return(
        <div className='progress-bar'>
            <img src={ReactBrand} alt="" />
            <div className="experience-unit">
                <div className="experience-measure measure-2">
                    <span>2 anos</span>
                </div>
            </div>
        </div>
    )
}