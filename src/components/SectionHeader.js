import Profile from './Profile';
import classes from './SectionHeader.module.css';

function SectionHeader(props) {
  var letters = props.letters;

  return <div className={classes.letters}>{letters}</div>;
}
export default SectionHeader;
