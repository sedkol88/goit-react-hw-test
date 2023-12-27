import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const element = stats.map((stat, index) => {
    if (index < stats.length - 1) {
      return (
        <li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>{element}</ul>
    </section>
  );
};

export default Statistics;

/* const newArray = originalArray.map((item, index) => {
  if (index < originalArray.length - 1) {
    return
  } else {
    return null;
  }}) */
