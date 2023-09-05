import styles from './styles.module.scss';

export default function Role(props) {
    const { employer, title, dateFrom, dateTo, bullets } = props;
    let newEmployer = false;
    if (!props.previousRole || (props.previousRole && props.previousRole.employer !== employer)) {
        newEmployer = true;
    }
    return (
        <>
            {newEmployer && props.previousRole ? <hr /> : null}
            {newEmployer ? <h2>{employer}</h2> : null}
            <div className={styles.role}>
                <h3>{title}</h3>
                <small>{
                    new Date(dateFrom).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' })}
                    &nbsp;-&nbsp;
                    {dateTo ? new Date(dateTo).toLocaleDateString('en-gb', { year: 'numeric', month: 'short' }) : <em>(Present)</em>}
                    </small>
                <ul dangerouslySetInnerHTML={{ __html: bullets }}></ul>
            </div>
            
        </>
    )
}