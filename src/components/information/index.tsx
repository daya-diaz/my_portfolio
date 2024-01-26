import { SectionTitle } from '../sectionTitle';
import './styles.scss';

export function Information() {
    return (
        <div className="infos">
                <SectionTitle text='Línguas'/>
                <div className="languages-info">
                    <div>
                        <span>🇧🇷</span> 
                        <span>PT-BR - Falante Nativo</span>
                    </div>
                    <div>
                        <span>🇺🇸</span>
                        <span>EN - A2</span>
                    </div>
                </div>
                <SectionTitle text='Educação'/>
                <div className="education-info">
                    <span>🎓</span>
                    <span>Análise e Desenvolvimento de Sistemas - Descomplica Faculdade Digital</span>
                </div>
        </div>
    )
}