import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props): JSX.Element => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateFormatter;
