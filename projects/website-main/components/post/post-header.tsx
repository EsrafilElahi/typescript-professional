import DateFormatter from '../date-formatter';
import PostTitle from './post-title';

type Props = {
  title: string;
  date: string;
  readingTime: string;
};

const PostHeader = ({ title, date, readingTime }: Props): JSX.Element => {
  return (
    <>
      <span className="text-gray-600 text-sm leading-none font-display">
        <DateFormatter dateString={date} />
        &nbsp;&bull;&nbsp;
        {readingTime}
      </span>
      <PostTitle>{title}</PostTitle>
    </>
  );
};

export default PostHeader;
