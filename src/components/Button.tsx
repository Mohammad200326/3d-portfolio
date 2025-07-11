interface IProps {
  className: string;
  id: string;
  text: string;
}

const Button = (props: IProps) => {
  return (
    <a className={`${props.className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{props.text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
