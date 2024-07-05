import styles from './styles.module.scss';

function Item({ area, header, content }) {
    return (
        <div className={styles.cell} style={{gridArea: `${area}`}}>
            <h4>{header}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Item;