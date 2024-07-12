interface IProps{
    src:string
}
const ImgIcon = ({ src }: IProps) => {
  return <img width={20} height={20} src={src} />;
};
export default ImgIcon