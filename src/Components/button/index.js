import { Button } from "./style";

export default function ButtonComponent(props) {
  const {
    name,
    propsWidth,
    propsHeight,
    propsBackGround,
    onClick,
    className,
    disabled=false,
    mediaWidth,
    mediaPropsPadding,
    type
  } = props;
  return (
    <Button
     type={type}
      className={className}
      propsWidth={propsWidth}
      mediaWidth={mediaWidth}
      propsHeight={propsHeight}
      propsBackGround={propsBackGround}
      onClick={onClick}
      mediaPropsPadding={mediaPropsPadding}
      disabled={disabled}
    >
      {name}
    </Button>
  );
}
