function GradientText({ type, children, extraStyles }) {
  const styles = `bg-gradient-to-r from-blue-700 to-lBlue text-transparent bg-clip-text pb-2 ${extraStyles}`;

  switch (type) {
    case "h1":
      return <h1 className={styles}>{children}</h1>;
    case "h2":
      return <h2 className={styles}>{children}</h2>;
    case "h3":
      return <h3 className={styles}>{children}</h3>;
    case "h4":
      return <h4 className={styles}>{children}</h4>;
    case "h5":
      return <h5 className={styles}>{children}</h5>;
    case "p":
      return <p className={styles}>{children}</p>;
    default:
      return <p className={styles}>{children}</p>;
  }
}

export default GradientText;
