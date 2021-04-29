export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600 );
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0'))  //adicionar '0' na frente caso o numero só tenha 1 digito
  .join(':')

  return timeString;
}