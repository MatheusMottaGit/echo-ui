export function getDate(datetime: string) {
  const today = new Date(datetime)
  return today.toLocaleDateString('pt-BR')
}