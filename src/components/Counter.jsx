import { useCounterStore } from '../store/counterStore'

const Counter = () => {
  const { title, count } = useCounterStore()

  return (
    <p>
      {title}: {count}
    </p>
  )
}

export default Counter
