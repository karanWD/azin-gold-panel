export const HandleDate = (timestamp: string): string => {
  const newDate = new Date(timestamp)
  const date = newDate.toLocaleDateString('fa-ir', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  })
  const hour = newDate.toLocaleTimeString('fa-ir', { timeStyle: 'short' })
  return hour + ' ' + date
}
