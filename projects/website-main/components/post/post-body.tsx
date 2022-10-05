type Props = {
  content: React.ReactNode;
};

const PostBody = ({ content }: Props): JSX.Element => {
  return <div className="markdown">{content}</div>;
};

export default PostBody;
