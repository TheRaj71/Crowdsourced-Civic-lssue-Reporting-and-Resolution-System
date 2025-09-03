export const getIssues = async (department: string) => {
    const response = await fetch(`/api/issues?department=${department}`);
    
    if (!response.ok){
        throw new Error("Failed to fetch issues");
    }

    const json = await response.json();
    return json.data;
}