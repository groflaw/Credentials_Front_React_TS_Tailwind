import ModalWrapper from './components/UI/Modal/ModalWrapper'
import Routes from '@/routes'
import { useAppSelector } from './store/hooks'

function App() {
  const { modalName } = useAppSelector((state) => state.modalReducer)
  return (
    <>
      <div className="relative">
        <Routes />
        {modalName !== '' && <ModalWrapper />}
      </div>
    </>
  )
}

export default App
