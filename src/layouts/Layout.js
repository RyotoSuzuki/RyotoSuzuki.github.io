import SectionHeader from '../components/SectionHeader.js';

function Layout(props) {
  const letters = props.letters;
  return (
    <div>
      <SectionHeader letters={letters} />
      {props.children}
    </div>
  );
}

export default Layout;
