const HandleDate = (timestamp: string): string => {
  const newDate = new Date(timestamp)
  const date = newDate.toLocaleDateString('fa-ir', {
    month: '2-digit',
    day: '2-digit',
  })
  const hour = newDate.toLocaleTimeString('fa-ir', { timeStyle: 'short' })
  return hour + ' ' + date
}

export default HandleDate
