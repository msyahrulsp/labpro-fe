export const parseDate = (date) => {
  const unix = new Date(date).getTime();
  const format = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(unix);

  const splitter = format.split(' ');
  const tgl =
    splitter[0] + ' ' + splitter[1] + ' ' + splitter[2]
  const waktu =
    splitter[3].replace(/[^0-9]/g, ':');
    
  return tgl + '-' + waktu;
}