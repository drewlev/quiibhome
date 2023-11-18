import './SubtitleSection.css'; // Ensure you have this CSS file for styling

const SubtitleSection = ({ subtitle, title, content }) => {
  // Function to determine if the title is a JSX element or an HTML string
  const renderTitle = () => {
    if (typeof title === 'string') {
      return <h2 dangerouslySetInnerHTML={{ __html: title }} />;
    } else {
      return <h1 className="title">{title}</h1>;
    }
  };

  return (
    <section className="subtitle-section">
      {subtitle && <div>{subtitle}</div>}
      {renderTitle()}
      {content && <p className="content" dangerouslySetInnerHTML={{ __html: content }} />}
    </section>
  );
};

export default SubtitleSection;
