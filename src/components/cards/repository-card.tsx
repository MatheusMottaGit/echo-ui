import { ArrowRight, Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'

interface Repo {
  id: string
  name: string
  description: string
  visibilty: string
  created_at: string
  updated_at: string
}

interface SearchedRepoProps {
  search: string
}

const RepositoryCard = ({ search }: SearchedRepoProps) => {
  function getDate(datetime: string) {
    const today = new Date(datetime)
    return today.toLocaleDateString('pt-BR')
  }

  const [repos, setRepos] = useState<Repo[]>([])

  const filteredRepos = search.length > 0 ? repos.filter(repo => repo.name.includes(search)) : []

  useEffect(() => {
    async function getRepos() {
      const response = await fetch('https://api.github.com/users/MatheusMottaGit/repos')
      const data: Repo[] = await response.json()
      setRepos(data)
    }

    getRepos()
  }, [])

  return (
    <>
      {search.length > 0 ? (
        <>
          {filteredRepos.map(repo => {
            const repoCreationDate = getDate(repo.created_at)

            return (
              <Card key={repo.id} className='h-64 cursor-pointer hover:bg-zinc-900/20 hover:transition-colors'>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    {repo.name}

                    <Link className='h-4 w-4' />
                  </CardTitle>
                  <CardDescription>Data de criação: {repoCreationDate}</CardDescription>
                </CardHeader>
                <CardContent className='text-zinc-400'>
                  <p>
                    {repo.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </>
      ) : (
        <>
          {repos.map(repo => {
            const repoCreationDate = getDate(repo.created_at)

            return (
              <Card key={repo.id} className='h-64 cursor-pointer hover:bg-zinc-900/20 hover:transition-colors'>
                <CardHeader>
                  <CardTitle className='text-xl'>
                    {repo.name}

                    <Link className='h-4 w-4' />
                  </CardTitle>
                  <CardDescription>Data de criação: {repoCreationDate}</CardDescription>
                </CardHeader>
                <CardContent className='text-zinc-400'>
                  <p>
                    {repo.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </>
      )}
    </>
  )
}

export default RepositoryCard

