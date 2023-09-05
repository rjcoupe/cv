import { useSelect, useFilter } from 'react-supabase';
import Role from './role';

import styles from '../app/styles.module.scss'

export default function Experience() {
    const filter = useFilter((query) => query.neq('hide', true));
    const [{ data, error, loading }] = useSelect('roles', { 
        filter
    });

    if (data) data.sort((a, b) => {
        const dateA = new Date(a.dateFrom);
        const dateB = new Date(b.dateFrom);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <div>
            {(!error && !loading && data)
            ?
            data.map((role, i) => <Role { ...role } previousRole={i !== 0 ? data[i-1] : null} />)
            :
            null}
        </div>
    )
}