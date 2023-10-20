type Props = {
  content: string;
};

export default function PaidContents({ content }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
