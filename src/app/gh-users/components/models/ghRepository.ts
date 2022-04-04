export interface GhRepository extends Array<GhRepository>{     
    name: string
    description: string
    html_url: string
    forks_count: number
    stargazers_count: number
}