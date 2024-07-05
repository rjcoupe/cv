import Cell from './cell.js';
import styles from './styles.module.scss';

const items = [
    {
        header: 'Teams Lead',
        content: 4,
        area: '1 / 1 / span 1 / span 1'
    },
    {
        header: 'Certifications',
        content: 6,
        area: '1 / 2 / span 1 / span 1'
    },
    {
        header: 'Professional Interests',
        content: 'Cybersecurity, Cloud, DevOps, Penetration Testing, Automation, AI/ML',
        area: '1 / 3 / span 1 / span 2'
    },
    { 
        header: 'Hires Made',
        content: 7,
        area: '2 / 3 / span 1 / span 1'
    },
    {
        header: '(Current) Personal Development Focus',
        content: 'Penetration Testing',
        area: '2 / 1 / span 1 / span 2'
    },
    {
        header: 'Gif Game',
        content: '🤌',
        area: '2 / 4 / span 1 / span 1'
    }
]

function Grid() {
    return (
        <div className={styles.container}>
            {items.map(item => <Cell 
                area={item.area}
                header={item.header}
                content={item.content} 
            /> )}
        </div>
    )
}

export default Grid;