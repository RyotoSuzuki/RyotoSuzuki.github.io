import classes from './SectionHeader.module.css';

function SectionHeader(props) {
  const letters = props.letters;

  return <div className={classes.letters}>{letters}</div>;
}
export default SectionHeader;
