import { history } from 'umi';

export interface IAppProps {}

export default function (props: IAppProps) {
  return (
    <div>
      halou
      <button
        onClick={() => {
          history.push('/one');
        }}
      >
        {' '}
        点我{' '}
      </button>
    </div>
  );
}
