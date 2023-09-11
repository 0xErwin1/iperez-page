const Help: React.FC = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-5'>
        <ul className='mr-5'>
          <li>
            <strong>help | h | ?</strong> - Show this help
          </li>
          <li>
            <strong>github</strong> - Go to GitHub profile
          </li>
          <li>
            <strong>linkedin</strong> - Go to LinkedIn profile
          </li>
          <li>
            <strong>arc</strong> - Go to arc() profile
          </li>
          <li>
            <strong>gitlab</strong> - Go to GitLab profile
          </li>
        </ul>

        <ul>
          <li>
            <strong>about</strong> - Show About Me
          </li>
          <li>
            <strong>projects</strong> - Show Projects
          </li>
          <li>
            <strong>server</strong> - Show Server Infrastructure
          </li>
          <li>
            <strong>web</strong> - Show About This Website
          </li>
        </ul>
      </div>
    </>
  );
};

export default Help;
