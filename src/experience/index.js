import { useSelect, useFilter } from 'react-supabase';
import Role from './role';

export default function Experience() {
    const filter = useFilter((query) => query.neq('hide', true));
    const [{ data, error, loading }] = useSelect('roles', { 
        filter
    });

    return (
        (!error && !loading && data)
        ?
        data.map(role => <Role { ...role } />)
        :
        null
    )
}