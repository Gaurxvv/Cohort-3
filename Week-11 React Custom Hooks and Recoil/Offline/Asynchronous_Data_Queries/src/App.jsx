import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './atom'


function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  )
}

function Main() {
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);




  return (
    <>
      <button>Home</button>

      <button>My Network({networkCount.network >= 100 ? "99+" : networkCount.network || 0})</button>
      <button>Jobs({networkCount.jobs || 0})</button>
      <button>Messaging({networkCount.message || 0})</button>
      <button>Notification({networkCount.notification || 0})</button>

      <button>Me({totalNotificationCount})</button>
    </>
  );
}

export default App;
