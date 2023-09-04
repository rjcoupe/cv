import { useFilter, useSelect } from "react-supabase";

export default function Profile() {
    const filter = useFilter((query) => query.eq('name', 'profile'));
    const [{ data, error, loading }] = useSelect('statics', { 
        filter,
        options: {
            count: 1,
            head: false
        },
        pause: false
    });

    return (
        (!error && !loading && data)
        ?
        <div dangerouslySetInnerHTML={{ __html: data[0].text }}></div>
        :
        null
    )
}