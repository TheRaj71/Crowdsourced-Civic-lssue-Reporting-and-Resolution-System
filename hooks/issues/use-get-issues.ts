// Constants
import { QUERY_KEYS } from "@/constants/query-keys";

// Services
import { getIssues } from "@/services/issues.service";

// React Query
import { useQuery } from "@tanstack/react-query";

export const useGetIssues = (department: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.ISSUES],
        queryFn: () => getIssues(department),
    })
}