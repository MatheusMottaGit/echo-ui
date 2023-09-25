import { ReactNode, createContext, useEffect, useState } from "react";

export interface Repo {
  id: string
  name: string
  visibilty: string
  created_at: string
}

interface Github {
  repos: Repo[]
}

export const GithubContext = createContext({} as Github)

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    async function getRepos() {
      const response = await fetch('https://api.github.com/users/MatheusMottaGit/repos')
      const data: Repo[] = await response.json()
      setRepos(data)
    }

    getRepos()
  }, [])

  return (
    <GithubContext.Provider value={{ repos }}>
      {children}
    </GithubContext.Provider>
  )
}