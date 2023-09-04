import styles from './styles.module.scss';

export default function Role(props) {
    const { employer, title, dateFrom, dateTo, bullets } = props;
    return (
        <div class={styles.role}>
            <h3>{title}</h3>
            <h4>{employer}</h4>
            <small>{
                new Date(dateFrom).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' })}
                -
                {dateTo ? new Date(dateTo).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' }) : <em>(Present)</em>}
                </small>
            <ul dangerouslySetInnerHTML={{ __html: bullets }}></ul>
        </div>
    )
}