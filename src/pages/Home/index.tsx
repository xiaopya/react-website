import Banner_Parallax from '@/components/Banner_Parallax';

export interface IAppProps {}

export default function (props: IAppProps) {
  return (
    <div>
      <div className="banner_block">
        <Banner_Parallax />
      </div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        正在开发......
      </h1>
    </div>
  );
}
