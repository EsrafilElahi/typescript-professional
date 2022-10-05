import NextLink from 'next/link';
import DateFormatter from '../date-formatter';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props): JSX.Element => {
  return (
    <NextLink as={`/blog/${slug}`} href={`/blog/[slug]`}>
      <a className="text-black no-underline mx-auto relative max-w-xl pb-6 mb-6 border-b border-gray-200 hover:border-black transition-colors block">
        <span className="text-gray-600 text-sm leading-none font-display">
          <DateFormatter dateString={date} />
        </span>
        <br />
        <h3 className="font-bold text-2xl leading-none mb-0 mt-0 inline">
          {title}
        </h3>
        <p className="text-gray-800 pt-1 mb-0">{excerpt}</p>
      </a>
    </NextLink>
  );
};

export default PostPreview;
