import { useQuery } from "@tanstack/react-query";


const useQuaryhook = () => {
    const { isPending, error, data,refetch } = useQuery({
        queryKey: ['sercive'],
        queryFn: () =>
            fetch('http://localhost:5001/service')
                .then((res) => res.json())
    })
    return {data, isPending, error,refetch}
}
export default  useQuaryhook ;