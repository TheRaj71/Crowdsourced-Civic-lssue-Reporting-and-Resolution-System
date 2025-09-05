"use client";

// Hooks
import { useGetIssues } from "@/hooks/issues/use-get-issues";
import { Issue } from "@/types";

export default function AdminPage() {
    const { data, isLoading, error } = useGetIssues("user.department"); // to be replaced with user.department

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const issues: Issue[] = Array.isArray(data) ? data : [data];

    if (issues.length === 0) {
        return <div>No issues found.</div>;
    }

    return (
        <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb" }}>Title</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb" }}>Description</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb" }}>Location</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb" }}>Category</th>
                        <th style={{ textAlign: "left", padding: "8px", borderBottom: "1px solid #e5e7eb" }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue: Issue, idx: number) => (
                        <tr key={issue.id ?? idx}>
                            <td style={{ padding: "8px", borderBottom: "1px solid #f3f4f6" }}>{issue.title ?? "-"}</td>
                            <td style={{ padding: "8px", borderBottom: "1px solid #f3f4f6" }}>{issue.description ?? "-"}</td>
                            <td style={{ padding: "8px", borderBottom: "1px solid #f3f4f6" }}>{issue.location ?? "-"}</td>
                            <td style={{ padding: "8px", borderBottom: "1px solid #f3f4f6" }}>{issue.category ?? "-"}</td>
                            <td style={{ padding: "8px", borderBottom: "1px solid #f3f4f6" }}>{issue.status ?? "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}