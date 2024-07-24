interface IProps{
  src: string,
  className?:string
}
const ImgIcon = ({ src, className = "w-5 h-5" }: IProps) => {
  return <img src={src} className={className } />;
};
export default ImgIcon