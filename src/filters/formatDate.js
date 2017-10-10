import plural from '../filters/plural'

export default function formatDate (date) {
  let diff = new Date() - (date * 1000)
  let sec = Math.floor(diff / 1000)
  let min = Math.floor(diff / 60000)
  let hour = Math.floor(diff / 3600000)
  let day = Math.floor(diff / 86400000)
  let month = Math.floor(diff / 2592000000)
  let year = Math.floor(diff / 31536000000)

  if (diff < 1000) {
    return ' только что'
  } else if (sec < 60) {
    return sec + plural(sec, ' секунда', ' секунды', ' секунд')
  } else if (min < 60) {
    return min + plural(min, ' минута', ' минуты', ' минут')
  } else if (hour < 24) {
    return hour + plural(hour, ' час', ' часа', ' часов')
  } else if (day < 28) {
    return day + plural(day, ' день', ' дня', ' дней')
  } else if (month < 12) {
    return month + plural(month, ' месяц', ' месяца', ' месяцев')
  } else if (year < 100) {
    return year + plural(year, ' год', ' года', ' лет')
  }
}
