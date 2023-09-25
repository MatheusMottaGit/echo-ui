import { GithubContext } from "@/contexts/GithubContext"
import { useContext } from "react"

export const useGithub = () => {
  const context = useContext(GithubContext)
  return context
}